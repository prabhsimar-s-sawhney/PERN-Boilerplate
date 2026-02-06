import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

// Basic health
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// DB health
app.get("/health/db", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ database: "connected" });
  } catch (err) {
    res.status(500).json({
      database: "down",
      error: err.message
    });
  }
});

export default app;
