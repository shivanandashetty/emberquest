import { google } from "googleapis";

// Read service account from Vercel environment variable
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

// Google Auth
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Sheets API
const sheets = google.sheets({
  version: "v4",
  auth,
});

const SHEET_ID = process.env.SHEET_ID;

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