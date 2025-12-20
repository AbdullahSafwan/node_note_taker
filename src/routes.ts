import express from "express";
import authRoutes from "./routes/auth";
import notesRoutes from "./routes/notes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/notes", notesRoutes);
router.get("/", (_req, res) => {
  res.send("Welcome to the Note Taker API");
});

export default router;
