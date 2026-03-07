import { google } from "googleapis";
import fs from "fs";
import path from "path";

// Absolute path to service account
const KEY_FILE = path.resolve("backend/service-account.json");

// Load service account credentials
const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Create Sheets API client
const sheets = google.sheets({
  version: "v4",
  auth,
});

// Get Sheet ID from environment variable
const SHEET_ID = process.env.SHEET_ID;

// Function to append data to sheet
export async function appendToSheet(data) {

  try {

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [data],
      },
    });

    console.log("Google Sheet Updated ✅");

  } catch (err) {

    console.error("Google Sheet Error ❌", err.message);
    throw err;

  }
}