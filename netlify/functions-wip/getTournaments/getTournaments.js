/* eslint-disable @typescript-eslint/no-require-imports */
const { getSpreadsheet } = require("../../../lib/get-spreadsheet");

exports.handler = async () => ({
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  body: JSON.stringify(await getSpreadsheet("tournaments"))
});