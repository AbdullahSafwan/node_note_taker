import { Prisma, PrismaClient } from "../../generated/prisma/client";
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

const noteVersionDao = {
  createNoteVersion,
  findVersionsByNoteId,
  findVersionByNumber,
};

export default noteVersionDao;
