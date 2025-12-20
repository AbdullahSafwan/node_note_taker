import express from "express";
import authRoutes from "./routes/auth";

const router = express.Router();

router.use("/auth", authRoutes);
router.get("/", (_req, res) => {
  res.send("Welcome to the Note Taker API");
});

export default router;