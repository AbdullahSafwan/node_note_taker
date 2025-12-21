import { prisma } from "../../config/database";
import { NotFoundError, ConflictError } from "../../utils/customErrors";
import { debugLog } from "../../utils/helper";
// import { share_permission } from "../../generated/prisma/client";
import { CreateShareRequest, UpdateShareRequest, ShareResponse, SharedNoteInfo } from "../../types/shareTypes";
import noteDao from "../../dao/note";
import { userDao } from "../../dao/user";
import { noteShareDao } from "../../dao/noteShare";

export const shareNote = async (noteId: string, userId: number, data: CreateShareRequest): Promise<ShareResponse> => {
  try {
    const note = await noteDao.findNoteByIdAndUserId(prisma, noteId, userId);

    if (!note) {
      throw new NotFoundError("Note not found");
    }

    const collaborator = await userDao.findUserByEmail(prisma, data.email);

    if (!collaborator) {
      throw new NotFoundError(`User with email ${data.email} not found`);
    }

    if (collaborator.id === userId) {
      throw new ConflictError("Cannot share note with yourself");
    }

    const existingShare = await noteShareDao.findFirstShare(prisma, noteId, collaborator.id);

    if (existingShare) {
      throw new ConflictError(`Note already shared with ${data.email}`);
    }

    const revokedShare = await prisma.note_share.findFirst({
      where: {
        noteId,
        sharedWith: collaborator.id,
        isRevoked: true,
      },
    });

    if (revokedShare) {
      // Restore revoked share
      const result = await noteShareDao.updateShare(prisma, revokedShare.id, {
        isRevoked: false,
        revokedAt: null,
        permission: data.permission,
      });

      return {
        id: result.id,
        noteId,
        sharedWithEmail: collaborator.email,
        sharedWithName: `${collaborator.firstName} ${collaborator.lastName}`,
        permission: result.permission,
        createdAt: result.createdAt,
      };
    }

    const share = await noteShareDao.createShare(prisma, {
      note: {
        connect: { id: noteId },
      },
      collaborator: {
        connect: { id: collaborator.id },
      },
      permission: data.permission,
      owner: {
        connect: { id: userId },
      },
    });

    return {
      id: share.id,
      noteId,
      sharedWithEmail: collaborator.email,
      sharedWithName: `${collaborator.firstName} ${collaborator.lastName}`,
      permission: share.permission,
      createdAt: share.createdAt,
    };
  } catch (error) {
    debugLog("Error in shareNote service:", error);
    throw error;
  }
};

export const getCollaborators = async (noteId: string, userId: number): Promise<ShareResponse[]> => {
  try {
    const note = await noteDao.findNoteByIdAndUserId(prisma, noteId, userId);
    if (!note) {
      throw new NotFoundError("Note not found");
    }

    const shares = await noteShareDao.getCollabortsByNoteId(prisma, noteId);

    return shares.map((share) => ({
      id: share.id,
      noteId: share.noteId,
      sharedWithEmail: share.collaborator.email,
      sharedWithName: `${share.collaborator.firstName} ${share.collaborator.lastName}`,
      permission: share.permission,
      createdAt: share.createdAt,
    }));
  } catch (error) {
    debugLog("Error in getCollaborators service:", error);
    throw error;
  }
};

export const getSharedNotes = async (userId: number, page: number = 1, limit: number = 20) => {
  try {
    const skip = (page - 1) * limit;

    const whereClause = {
      sharedWith: userId,
      isRevoked: false,
      note: {
        isDeleted: false,
      },
    };

    const { shares, total } = await noteShareDao.findNotesByClause(prisma, whereClause, skip, limit);

    const totalPages = Math.ceil(total / limit);

    const notes: SharedNoteInfo[] = shares.map((share) => ({
      noteId: share.note.id,
      title: share.note.title,
      ownerEmail: share.owner.email,
      ownerName: `${share.owner.firstName} ${share.owner.lastName}`,
      permission: share.permission,
      sharedAt: share.createdAt,
      updatedAt: share.note.updatedAt,
    }));

    return {
      notes,
      pagination: { total, page, limit, totalPages },
    };
  } catch (error) {
    debugLog("Error in getSharedNotes service:", error);
    throw error;
  }
};

export const updatePermission = async (shareId: string, userId: number, data: UpdateShareRequest): Promise<ShareResponse> => {
  try {
    const share = await noteShareDao.getShareDetailsById(prisma, shareId);

    if (!share) {
      throw new NotFoundError("Share not found");
    }

    // Verify user owns the note
    if (share.note.userId !== userId) {
      throw new NotFoundError("Only note owner can change permissions");
    }

    const updated = await noteShareDao.updateShare(prisma, shareId, {
      permission: data.permission,
      isRevoked: false,
      revokedAt: null,
    });

    return {
      id: updated.id,
      noteId: updated.noteId,
      sharedWithEmail: share.collaborator.email,
      sharedWithName: `${share.collaborator.firstName} ${share.collaborator.lastName}`,
      permission: updated.permission,
      createdAt: updated.createdAt,
    };
  } catch (error) {
    debugLog("Error in updatePermission service:", error);
    throw error;
  }
};

export const revokeAccess = async (shareId: string, userId: number): Promise<void> => {
  try {
    const share = await noteShareDao.getShareDetailsById(prisma, shareId);

    if (!share) {
      throw new NotFoundError("Share not found");
    }

    if (share.isRevoked) {
      throw new ConflictError("Access already revoked");
    }

    // Verify user owns the note
    if (share.note.userId !== userId) {
      throw new NotFoundError("Only note owner can revoke access");
    }

    // Soft delete
    await noteShareDao.updateShare(prisma, shareId, {
      isRevoked: true,
      revokedAt: new Date(),
    });
  } catch (error) {
    debugLog("Error in revokeAccess service:", error);
    throw error;
  }
};

const shareService = {
  shareNote,
  getCollaborators,
  getSharedNotes,
  updatePermission,
  revokeAccess,
};

export default shareService;
