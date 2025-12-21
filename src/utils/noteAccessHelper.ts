import { prisma } from "../config/database";
import { share_permission } from "@prisma/client";

export const canReadNote = async (
  noteId: string,
  userId: number
): Promise<boolean> => {
  // check if user is owner
  const note = await prisma.note.findFirst({
    where: {
      id: noteId,
      userId,
      isDeleted: false,
    },
  });

  if (note) return true; // owner can always read

  // Check if shared with READ or EDIT permission
  const share = await prisma.note_share.findFirst({
    where: {
      noteId,
      sharedWith: userId,
      isRevoked: false,
    },
  });

  return !!share; // Has access if share exists
};

// check if user can EDIT a note (owner or has EDIT permission)
export const canEditNote = async (
  noteId: string,
  userId: number
): Promise<boolean> => {
  // Check if user is owner
  const note = await prisma.note.findFirst({
    where: {
      id: noteId,
      userId,
      isDeleted: false,
    },
  });

  if (note) return true;

  // Check if shared with EDIT permission
  const share = await prisma.note_share.findFirst({
    where: {
      noteId,
      sharedWith: userId,
      isRevoked: false,
      permission: share_permission.EDIT,
    },
  });

  return !!share;
};

// check if user is the owner of the note
export const isNoteOwner = async (
  noteId: string,
  userId: number
): Promise<boolean> => {
  const note = await prisma.note.findFirst({
    where: {
      id: noteId,
      userId,
      isDeleted: false,
    },
  });

  return !!note;
};
