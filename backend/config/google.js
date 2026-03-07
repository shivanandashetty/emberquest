import { google } from "googleapis";

// Parse service account from Vercel ENV
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

// Google Auth
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Google Sheets API
const sheets = google.sheets({
  version: "v4",
  auth,
});

// Sheet ID from ENV
const SHEET_ID = process.env.SHEET_ID;

// Append data function
export async function appendToSheet(data) {
  try {

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [data],
      },
    });

    console.log("Google Sheet Updated ✅");

  } catch (error) {

    console.error("Google Sheets Error ❌", error);
    throw error;

  }
}