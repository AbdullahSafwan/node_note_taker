import { Router } from "express";
import { verifyToken } from "../middleware/auth";
import { throwValidationResult } from "../utils/helper";
import * as shareController from "../controllers/shares";
import * as shareValidator from "../validators/shareValidator";

const router = Router();

router.use(verifyToken);

router.post("/:noteId/share", shareValidator.shareNoteValidation, throwValidationResult, shareController.shareNote);

router.get("/:noteId/collaborators", shareValidator.getCollaboratorsValidation, throwValidationResult, shareController.getCollaborators);

router.get("/shared-with-me", shareValidator.getSharedNotesValidation, throwValidationResult, shareController.getSharedNotes);

router.put("/:noteId/share/:shareId", shareValidator.updatePermissionValidation, throwValidationResult, shareController.updatePermission);

router.delete("/:noteId/share/:shareId", shareValidator.revokeAccessValidation, throwValidationResult, shareController.revokeAccess);

export default router;
