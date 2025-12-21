import { note, note_version } from "@prisma/client";

// req types
export interface CreateNoteRequest {
  title: string;
  content: string;
}

export interface UpdateNoteRequest {
  title?: string;
  content?: string;
}

export interface RevertNoteRequest {
  versionNumber: number;
  changeDescription?: string;
}

export interface SearchNotesQuery {
  q: string;
  page?: number;
  limit?: number;
}

export interface ListNotesQuery {
  page?: number;
  limit?: number;
}

export type NoteResponse = Omit<note, "deletedAt" | "isDeleted">;

export type NoteVersionResponse = note_version;

// dao input types
export interface CreateNoteData {
  title: string;
  content: string;
  userId: number;
}

export interface UpdateNoteData {
  title?: string;
  content?: string;
}

export interface CreateNoteVersionData {
  noteId: string;
  title: string;
  content: string;
  versionNumber: number;
  createdBy: number;
  changeDescription?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
  skip: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
