import pool from "./db.js";
import { appendToSheet } from "./google.js";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

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

    // Insert into PostgreSQL
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

    // Insert into Google Sheet
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

    return res.status(200).json({
      success: true,
      message: "Form Submitted Successfully"
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}