import { body, param, query } from "express-validator";
import { share_permission } from "../../generated/prisma/client";

export const shareNoteValidation = [
  param("noteId").isUUID().withMessage("Invalid note ID"),
  body("email").isEmail().withMessage("Valid email required").normalizeEmail(),
  body("permission").isIn([share_permission.READ, share_permission.EDIT]).withMessage("Permission must be READ or EDIT"),
];

export const updatePermissionValidation = [
  param("noteId").isUUID().withMessage("Invalid note ID"),
  param("shareId").isUUID().withMessage("Invalid share ID"),
  body("permission").isIn([share_permission.READ, share_permission.EDIT]).withMessage("Permission must be READ or EDIT"),
];

export const revokeAccessValidation = [
  param("noteId").isUUID().withMessage("Invalid note ID"),
  param("shareId").isUUID().withMessage("Invalid share ID"),
];

export const getCollaboratorsValidation = [param("noteId").isUUID().withMessage("Invalid note ID")];

export const getSharedNotesValidation = [
  query("page").optional().isInt({ min: 1 }).withMessage("Page must be positive integer"),
  query("limit").optional().isInt({ min: 1, max: 100 }).withMessage("Limit must be between 1 and 100"),
];
