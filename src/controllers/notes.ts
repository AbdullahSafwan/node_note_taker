import { Request, Response } from "express";
import notesService from "../services/notes";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responseHelper";
import { setETagHeader } from "../middleware/etag";
import { NotFoundError, ConflictError } from "../utils/customErrors";
import { debugLog } from "../utils/helper";
import { CreateNoteRequest, UpdateNoteRequest, RevertNoteRequest } from "../types/notesTypes";

const createNote = async (req: Request<Record<string, never>, unknown, CreateNoteRequest>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const note = await notesService.createNote(userId, req.body);

    // set etag header
    setETagHeader(res, note.version);

    sendSuccessResponse(res, 201, "Note created successfully", note);
  } catch (error) {
    debugLog("Error in createNote controller:", error);
    sendErrorResponse(res, 500, "Failed to create note", error);
  }
};

const getNoteById = async (req: Request<{ id: string }, unknown, unknown>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { id } = req.params;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const note = await notesService.getNoteById(id, userId);

    // set etag header
    setETagHeader(res, note.version);

    sendSuccessResponse(res, 200, "Note retrieved successfully", note);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }

    debugLog("Error in getNoteById controller:", error);
    sendErrorResponse(res, 500, "Failed to retrieve note", error);
  }
};

const getAllNotes = async (
  req: Request<Record<string, never>, unknown, unknown, { page?: string; limit?: string }>,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "20", 10);

    const { notes, pagination } = await notesService.getAllNotes(userId, page, limit);

    sendSuccessResponse(res, 200, "Notes retrieved successfully", notes, {
      total: pagination.total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: pagination.totalPages,
    });
  } catch (error) {
    debugLog("Error in getAllNotes controller:", error);
    sendErrorResponse(res, 500, "Failed to retrieve notes", error);
  }
};

const searchNotes = async (
  req: Request<Record<string, never>, unknown, unknown, { q: string; page?: string; limit?: string }>,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const { q: searchQuery } = req.query;
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "20", 10);

    const { notes, pagination } = await notesService.searchNotes(userId, searchQuery, page, limit);

    sendSuccessResponse(res, 200, "Search results retrieved successfully", notes, {
      total: pagination.total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: pagination.totalPages,
      searchQuery: pagination.searchQuery,
    });
  } catch (error) {
    debugLog("Error in searchNotes controller:", error);
    sendErrorResponse(res, 500, "Failed to search notes", error);
  }
};

const updateNote = async (req: Request<{ id: string }, unknown, UpdateNoteRequest>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { id } = req.params;
    const expectedVersion = req.etag;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    if (expectedVersion === undefined) {
      sendErrorResponse(res, 428, "If-Match header is required");
      return;
    }

    const updatedNote = await notesService.updateNote(id, userId, expectedVersion, req.body);

    if (!updatedNote) {
      sendErrorResponse(res, 500, "Failed to update note");
      return;
    }

    // Set new ETag header
    setETagHeader(res, updatedNote.version);

    sendSuccessResponse(res, 200, "Note updated successfully", updatedNote);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }

    if (error instanceof ConflictError) {
      sendErrorResponse(res, 412, error.message, error.details);
      return;
    }

    debugLog("Error in updateNote controller:", error);
    sendErrorResponse(res, 500, "Failed to update note", error);
  }
};

const deleteNote = async (req: Request<{ id: string }, unknown, unknown>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { id } = req.params;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    await notesService.deleteNote(id, userId);

    sendSuccessResponse(res, 200, "Note deleted successfully");
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }

    debugLog("Error in deleteNote controller:", error);
    sendErrorResponse(res, 500, "Failed to delete note", error);
  }
};

const getVersionHistory = async (req: Request<{ id: string }, unknown, unknown>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { id } = req.params;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const versions = await notesService.getVersionHistory(id, userId);

    sendSuccessResponse(res, 200, "Version history retrieved successfully", versions);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }

    debugLog("Error in getVersionHistory controller:", error);
    sendErrorResponse(res, 500, "Failed to retrieve version history", error);
  }
};

const revertToVersion = async (req: Request<{ id: string }, unknown, RevertNoteRequest>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { id } = req.params;
    const expectedVersion = req.etag;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    if (expectedVersion === undefined) {
      sendErrorResponse(res, 428, "If-Match header is required");
      return;
    }

    const revertedNote = await notesService.revertToVersion(id, userId, expectedVersion, req.body);

    if (!revertedNote) {
      sendErrorResponse(res, 500, "Failed to revert note");
      return;
    }

    // Set new ETag header
    setETagHeader(res, revertedNote.version);

    sendSuccessResponse(res, 200, `Note reverted to version ${req.body.versionNumber} successfully`, revertedNote);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }

    if (error instanceof ConflictError) {
      sendErrorResponse(res, 412, error.message, error.details);
      return;
    }

    debugLog("Error in revertToVersion controller:", error);
    sendErrorResponse(res, 500, "Failed to revert note", error);
  }
};

const notesController = {
  createNote,
  getNoteById,
  getAllNotes,
  searchNotes,
  updateNote,
  deleteNote,
  getVersionHistory,
  revertToVersion,
};

export default notesController;
