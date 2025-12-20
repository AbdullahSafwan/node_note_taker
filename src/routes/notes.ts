import { Router } from "express";
import notesController from "../controllers/notes";
import { verifyToken } from "../middleware/auth";
import { requireETag } from "../middleware/etag";
import { throwValidationResult } from "../utils/helper";
import {
  createNoteValidation,
  updateNoteValidation,
  getNoteByIdValidation,
  deleteNoteValidation,
  searchNotesValidation,
  listNotesValidation,
  getVersionHistoryValidation,
  revertToVersionValidation,
} from "../middleware/validator/notesValidator";

const router = Router();

router.use(verifyToken);

router.post("/", createNoteValidation, throwValidationResult, notesController.createNote);

router.get("/", listNotesValidation, throwValidationResult, notesController.getAllNotes);

router.get("/search", searchNotesValidation, throwValidationResult, notesController.searchNotes);

router.get("/:id", getNoteByIdValidation, throwValidationResult, notesController.getNoteById);

router.put("/:id", requireETag, updateNoteValidation, throwValidationResult, notesController.updateNote);

router.delete("/:id", deleteNoteValidation, throwValidationResult, notesController.deleteNote);

router.get("/:id/versions", getVersionHistoryValidation, throwValidationResult, notesController.getVersionHistory);

router.post("/:id/revert", requireETag, revertToVersionValidation, throwValidationResult, notesController.revertToVersion);

export default router;
