import express from "express";
import pool from "../config/db.js";
import { appendToSheet } from "../config/google.js";

const router = express.Router();

router.post("/submit", async (req, res) => {

  const {
    full_name,
    college,
    city,
    phone,
    email,
    semester,
    domain,
    mode
  } = req.body;

  try {

    // ✅ Save to Neon DB
    await pool.query(
      `INSERT INTO forms
      (full_name, college, city, phone, email, semester, domain, mode)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,

      [
        full_name,
        college,
        city,
        phone,
        email,
        semester,
        domain,
        mode
      ]
    );

    console.log("Saved to DB ✅");

    // ✅ Save to Google Sheet
    await appendToSheet([
      full_name,
      college,
      city,
      phone,
      email,
      semester,
      domain,
      mode,
      new Date().toLocaleString("en-IN")
    ]);

    console.log("Saved to Sheet ✅");

    res.json({
      success: true,
      message: "Form Submitted Successfully ✅"
    });

  } catch (err) {

    console.error("ERROR ❌", err);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

export default router;
