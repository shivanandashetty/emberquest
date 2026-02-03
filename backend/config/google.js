import { google } from "googleapis";
import path from "path";

// Path to service account file
const KEY_FILE = path.join(process.cwd(), "service-account.json");

// Auth
const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Sheets API
const sheets = google.sheets({
  version: "v4",
  auth,
});

// Sheet ID from .env
const SHEET_ID = process.env.SHEET_ID;


// ✅ Function to append data
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
