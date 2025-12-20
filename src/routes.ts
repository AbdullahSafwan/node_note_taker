import express from "express";

const router = express.Router();


router.get("/", (_req, res) => {
  res.send("Welcome to the Note Taker API");
});

export default router;