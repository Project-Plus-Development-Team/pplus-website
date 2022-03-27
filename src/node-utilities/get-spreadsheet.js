/* eslint-disable @typescript-eslint/no-require-imports */
const { google } = require("googleapis");
const { config } = require("dotenv");

config({
  path: "./.env.local"
});

exports.getSpreadsheet = async (sheetName) => {
  const sheets = google.sheets({ version: "v4", auth: process.env.GOOGLE_CLOUD_PLATFORM_API_KEY });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: sheetName,
    key: process.env.GOOGLE_CLOUD_PLATFORM_API_KEY
  });

  return response.data;
};