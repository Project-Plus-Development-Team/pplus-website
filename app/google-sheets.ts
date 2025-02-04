const sheetId = process.env.GOOGLE_SPREADSHEET_ID;
const apiKey = process.env.GOOGLE_CLOUD_PLATFORM_API_KEY;

export const getSpreadsheet = async (sheetName: string) => {
	if (apiKey === undefined || sheetId === undefined) {
		throw new Error(
			"GOOGLE_CLOUD_PLATFORM_API_KEY or GOOGLE_SPREADSHEET_ID is undefined, check README.md"
		);
	}

	const response = await fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`
	);

	const json = await response.json();
	return json.values as string[][];
};

export const convertSheetToObjects = <T extends {}>(
	headerRow: string[],
	rows: string[][]
): T[] =>
	rows.map(
		(row) =>
			headerRow.reduce((prev, cur, index) => {
				return {
					...prev,
					[cur]: row[index] ?? "",
				};
			}, {}) as T
	);
