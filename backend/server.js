import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors({origin: "*", // allow all for now
    methods: ["GET", "POST"],}));
app.use(express.json());

// Test route
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send("Backend Running with Neon ✅");
  } catch (err) {
    res.send("DB Failed ❌");
  }
});

// 👉 CONNECT ROUTES HERE
app.use("/", formRoutes);

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
