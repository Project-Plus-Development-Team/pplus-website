/* eslint-disable @typescript-eslint/no-require-imports */
const { google } = require("googleapis");
const { config } = require("dotenv");

const { parsed } = config({
  path: "./.env.local"
});

exports.getSpreadsheet = async (sheetName) => {
  const sheets = google.sheets({ version: "v4", auth: parsed.GOOGLE_CLOUD_PLATFORM_API_KEY });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: parsed.GOOGLE_SPREADSHEET_ID,
    range: sheetName,
    key: parsed.GOOGLE_CLOUD_PLATFORM_API_KEY
  });

  return response.data;
};