import { Prisma, PrismaClient } from "../../generated/prisma/client";
import { debugLog } from "../utils/helper";

const findFirstShare = async (prisma: PrismaClient | Prisma.TransactionClient, noteId: string, sharedWith: number) => {
  try {
    return await prisma.note_share.findFirst({
      where: {
        noteId,
        sharedWith,
        isRevoked: false,
      },
    });
  } catch (error) {
    debugLog("Error finding first share:", error);
    throw error;
  }
};

const updateShare = async (prisma: PrismaClient | Prisma.TransactionClient, shareId: string, data: Partial<Prisma.note_shareUpdateInput>) => {
  try {
    return await prisma.note_share.update({
      where: {
        id: shareId,
      },
      data,
    });
  } catch (error) {
    debugLog("Error updating share:", error);
    throw error;
  }
};

const createShare = async (prisma: PrismaClient | Prisma.TransactionClient, data: Prisma.note_shareCreateInput) => {
  try {
    return await prisma.note_share.create({
      data,
    });
  } catch (error) {
    debugLog("Error creating share:", error);
    throw error;
  }
};

const getCollabortsByNoteId = async (prisma: PrismaClient | Prisma.TransactionClient, noteId: string) => {
  try {
    return await prisma.note_share.findMany({
      where: {
        noteId,
        isRevoked: false,
      },
      include: {
        collaborator: true,
      },
    });
  } catch (error) {
    debugLog("Error getting collaborators by note ID:", error);
    throw error;
  }
};

const findNotesByClause = async (
  prisma: PrismaClient | Prisma.TransactionClient,
  whereClause: Prisma.note_shareWhereInput,
  skip: number,
  limit: number
) => {
  try {
    const [shares, total] = await Promise.all([
      prisma.note_share.findMany({
        where: whereClause,
        include: {
          note: true,
          owner: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),
      prisma.note_share.count({
        where: whereClause,
      }),
    ]);

    return { shares, total };
  } catch (error) {
    debugLog("Error finding notes by clause:", error);
    throw error;
  }
};

const getShareDetailsById = async (prisma: PrismaClient | Prisma.TransactionClient, shareId: string) => {
  try {
    return await prisma.note_share.findUnique({
      where: {
        id: shareId,
      },
      include: {
        collaborator: true,
        note: true,
        owner: true,
      },
    });
  } catch (error) {
    debugLog("Error getting notes details by IDs:", error);
    throw error;
  }
};

export const noteShareDao = {
  findFirstShare,
  updateShare,
  createShare,
  getCollabortsByNoteId,
  findNotesByClause,
  getShareDetailsById,
};
