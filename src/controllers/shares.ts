import { Request, Response } from "express";
import shareService from "../services/shares";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responseHelper";
import { NotFoundError, ConflictError } from "../utils/customErrors";
import { debugLog } from "../utils/helper";
import { CreateShareRequest, UpdateShareRequest } from "../types/shareTypes";

export const shareNote = async (req: Request<{ noteId: string }, unknown, CreateShareRequest>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { noteId } = req.params;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const share = await shareService.shareNote(noteId, userId, req.body);
    sendSuccessResponse(res, 201, "Note shared successfully", share);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }
    if (error instanceof ConflictError) {
      sendErrorResponse(res, 409, error.message);
      return;
    }
    debugLog("Error in shareNote controller:", error);
    sendErrorResponse(res, 500, "Failed to share note", error);
  }
};

export const getCollaborators = async (req: Request<{ noteId: string }>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { noteId } = req.params;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const collaborators = await shareService.getCollaborators(noteId, userId);
    sendSuccessResponse(res, 200, "Collaborators retrieved successfully", collaborators);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }
    debugLog("Error in getCollaborators controller:", error);
    sendErrorResponse(res, 500, "Failed to get collaborators", error);
  }
};

export const getSharedNotes = async (req: Request<unknown, unknown, unknown, { page?: string; limit?: string }>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const page = parseInt(req.query.page || "1");
    const limit = parseInt(req.query.limit || "20");

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const result = await shareService.getSharedNotes(userId, page, limit);
    sendSuccessResponse(res, 200, "Shared notes retrieved successfully", result.notes, result.pagination);
  } catch (error) {
    debugLog("Error in getSharedNotes controller:", error);
    sendErrorResponse(res, 500, "Failed to get shared notes", error);
  }
};

export const updatePermission = async (
  req: Request<{ noteId: string; shareId: string }, unknown, UpdateShareRequest>,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { shareId } = req.params;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    const share = await shareService.updatePermission(shareId, userId, req.body);
    sendSuccessResponse(res, 200, "Permission updated successfully", share);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }
    debugLog("Error in updatePermission controller:", error);
    sendErrorResponse(res, 500, "Failed to update permission", error);
  }
};

export const revokeAccess = async (req: Request<{ noteId: string; shareId: string }>, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { shareId } = req.params;

    if (!userId) {
      sendErrorResponse(res, 401, "Unauthorized");
      return;
    }

    await shareService.revokeAccess(shareId, userId);
    sendSuccessResponse(res, 200, "Access revoked successfully");
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendErrorResponse(res, 404, error.message);
      return;
    }
    if (error instanceof ConflictError) {
      sendErrorResponse(res, 409, error.message);
      return;
    }
    debugLog("Error in revokeAccess controller:", error);
    sendErrorResponse(res, 500, "Failed to revoke access", error);
  }
};
