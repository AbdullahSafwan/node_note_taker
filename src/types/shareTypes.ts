import { share_permission } from "../../generated/prisma/client";


export type CreateShareRequest = {
  email: string;
  permission: share_permission;
};

export type UpdateShareRequest = {
  permission: share_permission;
};

export type ShareResponse = {
  id: string;
  noteId: string;
  sharedWithEmail: string;
  sharedWithName: string;
  permission: share_permission;
  createdAt: Date;
};

export type SharedNoteInfo = {
  noteId: string;
  title: string;
  ownerEmail: string;
  ownerName: string;
  permission: share_permission;
  sharedAt: Date;
  updatedAt: Date;
};
