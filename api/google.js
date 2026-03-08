import { google } from "googleapis";

const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

const SHEET_ID = process.env.SHEET_ID;

export async function appendToSheet(data) {
  try {

    if (!SHEET_ID) {
      throw new Error("Sheet ID missing");
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [data],
      },
    });

    console.log("Sheet Updated");

  } catch (error) {
    console.error("Sheets error:", error);
    throw error;
  }
}