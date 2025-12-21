import { Prisma, PrismaClient } from "@prisma/client";
import { CreateNoteVersionData } from "../types/notesTypes";
import { debugLog } from "../utils/helper";

export const createNoteVersion = async (prisma: PrismaClient | Prisma.TransactionClient, data: CreateNoteVersionData) => {
  try {
    return await prisma.note_version.create({
      data: {
        noteId: data.noteId,
        title: data.title,
        content: data.content,
        versionNumber: data.versionNumber,
        createdBy: data.createdBy,
        changeDescription: data.changeDescription,
      },
    });
  } catch (error) {
    debugLog("Error creating note version:", error);
    throw error;
  }
};

export const findVersionsByNoteId = async (prisma: PrismaClient | Prisma.TransactionClient, noteId: string) => {
  try {
    return await prisma.note_version.findMany({
      where: {
        noteId,
      },
      orderBy: {
        versionNumber: "desc",
      },
    });
  } catch (error) {
    debugLog("Error finding versions by note ID:", error);
    throw error;
  }
};

export const findVersionByNumber = async (prisma: PrismaClient | Prisma.TransactionClient, noteId: string, versionNumber: number) => {
  try {
    return await prisma.note_version.findFirst({
      where: {
        noteId,
        versionNumber,
      },
    });
  } catch (error) {
    debugLog("Error finding version by number:", error);
    throw error;
  }
};

export const searchVersions = async (
  prisma: PrismaClient | Prisma.TransactionClient,
  userId: number,
  searchQuery: string,
  skip: number,
  limit: number
) => {
  try {
    const whereClause = {
      createdBy: userId,
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
    };

    const [versions, total] = await Promise.all([
      prisma.note_version.findMany({
        where: whereClause,
        select: {
          id: true,
          noteId: true,
          title: true,
          versionNumber: true,
          createdAt: true,
          createdBy: true,
          changeDescription: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),
      prisma.note_version.count({
        where: whereClause,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return { versions, total, totalPages };
  } catch (error) {
    debugLog("Error searching versions:", error);
    throw error;
  }
};

const noteVersionDao = {
  createNoteVersion,
  findVersionsByNoteId,
  findVersionByNumber,
  searchVersions,
};

export default noteVersionDao;
