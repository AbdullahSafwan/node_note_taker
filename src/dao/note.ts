import { PrismaClient, Prisma } from "../../generated/prisma/client";
import { CreateNoteData, UpdateNoteData } from "../types/notesTypes";
import { debugLog } from "../utils/helper";

const createNote = async (prisma: PrismaClient | Prisma.TransactionClient, data: CreateNoteData) => {
  try {
    return await prisma.note.create({
      data: {
        title: data.title,
        content: data.content,
        userId: data.userId,
      },
    });
  } catch (error) {
    debugLog("Error creating note:", error);
    throw error;
  }
};

const findNoteById = async (prisma: PrismaClient | Prisma.TransactionClient, noteId: string, userId: number) => {
  try {
    return await prisma.note.findFirst({
      where: {
        id: noteId,
        userId,
        isDeleted: false,
      },
    });
  } catch (error) {
    debugLog("Error finding note by ID:", error);
    throw error;
  }
};

const findAllNotesByUser = async (prisma: PrismaClient | Prisma.TransactionClient, userId: number, skip: number, limit: number) => {
  try {
    const [notes, total] = await Promise.all([
      prisma.note.findMany({
        where: {
          userId,
          isDeleted: false,
        },
        orderBy: {
          updatedAt: "desc",
        },
        skip,
        take: limit,
      }),
      prisma.note.count({
        where: {
          userId,
          isDeleted: false,
        },
      }),
    ]);

    return { notes, total };
  } catch (error) {
    debugLog("Error finding notes by user:", error);
    throw error;
  }
};

const searchNotes = async (
  prisma: PrismaClient | Prisma.TransactionClient,
  userId: number,
  searchQuery: string,
  skip: number,
  limit: number
) => {
  try {
    const [notes, total] = await Promise.all([
      prisma.note.findMany({
        where: {
          userId,
          isDeleted: false,
          OR: [
            {
              title: {
                contains: searchQuery,
              },
            },
            {
              content: {
                contains: searchQuery,
              },
            },
          ],
        },
        orderBy: {
          updatedAt: "desc",
        },
        skip,
        take: limit,
      }),
      prisma.note.count({
        where: {
          userId,
          isDeleted: false,
          OR: [
            {
              title: {
                contains: searchQuery,
              },
            },
            {
              content: {
                contains: searchQuery,
              },
            },
          ],
        },
      }),
    ]);

    return { notes, total };
  } catch (error) {
    debugLog("Error searching notes:", error);
    throw error;
  }
};

const updateNote = async (
  prisma: PrismaClient | Prisma.TransactionClient,
  noteId: string,
  userId: number,
  expectedVersion: number,
  data: UpdateNoteData
) => {
  try {
    const updateResult = await prisma.note.updateMany({
      where: {
        id: noteId,
        userId,
        version: expectedVersion,
        isDeleted: false,
      },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.content !== undefined && { content: data.content }),
        version: {
          increment: 1,
        },
      },
    });

    return updateResult;
  } catch (error) {
    debugLog("Error updating note:", error);
    throw error;
  }
};

const softDeleteNote = async (prisma: PrismaClient | Prisma.TransactionClient, noteId: string, userId: number) => {
  try {
    return await prisma.note.updateMany({
      where: {
        id: noteId,
        userId,
        isDeleted: false,
      },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });
  } catch (error) {
    debugLog("Error soft deleting note:", error);
    throw error;
  }
};

const revertNoteToVersion = async (
  prisma: PrismaClient | Prisma.TransactionClient,
  noteId: string,
  userId: number,
  expectedVersion: number,
  title: string,
  content: string
) => {
  try {
    const updateResult = await prisma.note.updateMany({
      where: {
        id: noteId,
        userId,
        version: expectedVersion,
        isDeleted: false,
      },
      data: {
        title,
        content,
        version: {
          increment: 1,
        },
      },
    });

    return updateResult;
  } catch (error) {
    debugLog("Error reverting note to version:", error);
    throw error;
  }
};

const noteDao = {
  createNote,
  findNoteById,
  findAllNotesByUser,
  searchNotes,
  updateNote,
  softDeleteNote,
  revertNoteToVersion,
};

export default noteDao;
