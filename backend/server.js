import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send("Backend Running with Neon ✅");
  } catch (err) {
    res.send("DB Failed ❌");
  }
});

app.use("/", formRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});