import { prisma } from "../../config/database";
import noteDao from "../../dao/note";
import noteVersionDao from "../../dao/noteVersion";
import { NotFoundError, ConflictError } from "../../utils/customErrors";
import { debugLog } from "../../utils/helper";
import { CreateNoteRequest, UpdateNoteRequest, RevertNoteRequest } from "../../types/notesTypes";

export const createNote = async (userId: number, data: CreateNoteRequest) => {
  try {
    const note = await noteDao.createNote(prisma, {
      title: data.title,
      content: data.content,
      userId,
    });

    return note;
  } catch (error) {
    debugLog("Error in createNote service:", error);
    throw error;
  }
};

export const getNoteById = async (noteId: string, userId: number) => {
  try {
    const note = await noteDao.findNoteById(prisma, noteId, userId);

    if (!note) {
      throw new NotFoundError("Note not found");
    }

    return note;
  } catch (error) {
    debugLog("Error in getNoteById service:", error);
    throw error;
  }
};

export const getAllNotes = async (userId: number, page: number = 1, limit: number = 20) => {
  try {
    const skip = (page - 1) * limit;
    const { notes, total } = await noteDao.findAllNotesByUser(prisma, userId, skip, limit);

    const totalPages = Math.ceil(total / limit);

    return {
      notes,
      pagination: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  } catch (error) {
    debugLog("Error in getAllNotes service:", error);
    throw error;
  }
};

export const searchNotes = async (userId: number, searchQuery: string, page: number = 1, limit: number = 20) => {
  try {
    const skip = (page - 1) * limit;
    const { notes, total } = await noteDao.searchNotes(prisma, userId, searchQuery, skip, limit);

    const totalPages = Math.ceil(total / limit);

    return {
      notes,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        searchQuery,
      },
    };
  } catch (error) {
    debugLog("Error in searchNotes service:", error);
    throw error;
  }
};

export const updateNote = async (noteId: string, userId: number, expectedVersion: number, data: UpdateNoteRequest) => {
  try {
    return await prisma.$transaction(async (tx) => {
      // 1. Fetch current note
      const note = await noteDao.findNoteById(tx, noteId, userId);

      if (!note) {
        throw new NotFoundError("Note not found");
      }

      // 2. Check version match early
      if (note.version !== expectedVersion) {
        throw new ConflictError("Note was modified by another user", {
          expected: expectedVersion,
          current: note.version,
        });
      }

      // 3. Create version snapshot BEFORE update
      await noteVersionDao.createNoteVersion(tx, {
        noteId,
        title: note.title,
        content: note.content,
        versionNumber: note.version,
        createdBy: userId,
      });

      // 4. Perform optimistic locking update
      const updateResult = await noteDao.updateNote(tx, noteId, userId, expectedVersion, data);

      // 5. Verify update succeeded
      if (updateResult.count === 0) {
        throw new ConflictError("Version mismatch during update", {
          expected: expectedVersion,
          current: note.version,
        });
      }

      // 6. Return updated note
      const updatedNote = await noteDao.findNoteById(tx, noteId, userId);
      return updatedNote;
    });
  } catch (error) {
    debugLog("Error in updateNote service:", error);
    throw error;
  }
};

export const deleteNote = async (noteId: string, userId: number) => {
  try {
    const result = await noteDao.softDeleteNote(prisma, noteId, userId);

    if (result.count === 0) {
      throw new NotFoundError("Note not found or already deleted");
    }

    return { success: true };
  } catch (error) {
    debugLog("Error in deleteNote service:", error);
    throw error;
  }
};

export const getVersionHistory = async (noteId: string, userId: number) => {
  try {
    // Verify note exists and belongs to user
    const note = await noteDao.findNoteById(prisma, noteId, userId);

    if (!note) {
      throw new NotFoundError("Note not found");
    }

    // Get all versions
    const versions = await noteVersionDao.findVersionsByNoteId(prisma, noteId);

    return versions;
  } catch (error) {
    debugLog("Error in getVersionHistory service:", error);
    throw error;
  }
};

export const searchVersions = async (userId: number, searchQuery: string, page: number = 1, limit: number = 20) => {
  try {
    const skip = (page - 1) * limit;
    const { versions, total } = await noteVersionDao.searchVersions(prisma, userId, searchQuery, skip, limit);

    const totalPages = Math.ceil(total / limit);

    return {
      versions,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        searchQuery,
      },
    };
  } catch (error) {
    debugLog("Error in searchVersions service:", error);
    throw error;
  }
};

export const revertToVersion = async (noteId: string, userId: number, expectedVersion: number, data: RevertNoteRequest) => {
  try {
    return await prisma.$transaction(async (tx) => {
      // 1. Verify note exists and belongs to user
      const note = await noteDao.findNoteById(tx, noteId, userId);

      if (!note) {
        throw new NotFoundError("Note not found");
      }

      // 2. Check version match
      if (note.version !== expectedVersion) {
        throw new ConflictError("Note was modified by another user", {
          expected: expectedVersion,
          current: note.version,
        });
      }

      // 3. Find the target version to revert to
      const targetVersion = await noteVersionDao.findVersionByNumber(tx, noteId, data.versionNumber);

      if (!targetVersion) {
        throw new NotFoundError(`Version ${data.versionNumber} not found for this note`);
      }

      // 4. Create version snapshot of CURRENT state before reverting
      await noteVersionDao.createNoteVersion(tx, {
        noteId,
        title: note.title,
        content: note.content,
        versionNumber: note.version,
        createdBy: userId,
        changeDescription: data.changeDescription || `Reverted to version ${data.versionNumber}`,
      });

      // 5. Revert note to target version content
      const revertResult = await noteDao.revertNoteToVersion(tx, noteId, userId, expectedVersion, targetVersion.title, targetVersion.content);

      // 6. Verify revert succeeded
      if (revertResult.count === 0) {
        throw new ConflictError("Version mismatch during revert", {
          expected: expectedVersion,
          current: note.version,
        });
      }

      // 7. Return reverted note
      const revertedNote = await noteDao.findNoteById(tx, noteId, userId);
      return revertedNote;
    });
  } catch (error) {
    debugLog("Error in revertToVersion service:", error);
    throw error;
  }
};

const notesService = {
  createNote,
  getNoteById,
  getAllNotes,
  searchNotes,
  searchVersions,
  updateNote,
  deleteNote,
  getVersionHistory,
  revertToVersion,
};

export default notesService;
