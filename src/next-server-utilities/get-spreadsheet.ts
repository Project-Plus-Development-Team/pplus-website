import { google } from "googleapis";

// config({
//   path: "./.env.local"
// });

export const getSpreadsheet = async (sheetName: string) => {
  const sheets = google.sheets({ version: "v4", auth: process.env.GOOGLE_CLOUD_PLATFORM_API_KEY });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: sheetName,
    key: process.env.GOOGLE_CLOUD_PLATFORM_API_KEY
  });

  const values = response.data.values;

  if (values === null || values === undefined) {
    throw new Error(`Spreadsheet response from "${sheetName}" was unexpectetly null or undefined.`);
  }

  return values as string[][];
};