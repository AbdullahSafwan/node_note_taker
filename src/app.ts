import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
import helmet from "helmet";
import router from "./routes";



const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Cache-Control"],
  })
);

app.use("/", router);

export default app;