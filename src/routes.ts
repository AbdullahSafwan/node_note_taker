import express from "express";
import authRoutes from "./routes/auth";
import notesRoutes from "./routes/notes";
import shareRoutes from "./routes/shares";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/notes", notesRoutes);
router.use("/note-share", shareRoutes);
router.get("/", (_req, res) => {
  res.send("Welcome to the Note Taker API");
});

export default router;
