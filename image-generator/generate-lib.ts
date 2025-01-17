import fs from "node:fs/promises";
import path from "node:path";
import sharp, { type ResizeOptions } from "sharp";

const root = (...paths: string[]) => path.join(process.cwd(), ...paths);

const pathExists = (path: string) =>
	fs
		.access(path)
		.then(() => true)
		.catch(() => false);

async function writeFileWithCreateParentDir(
	file: string,
	data: string | Buffer
) {
	const dir = path.dirname(file);

	if (!(await pathExists(dir))) {
		await fs.mkdir(dir, { recursive: true });
	}

	return fs.writeFile(file, data, "utf-8");
}

type ConvertOptions = {
	resize?: ResizeOptions;
	flop?: boolean;
	quality?: number;
};

const runConversion = async (
	options: ConvertOptions,
	sourceFile: string,
	outputFilePath: string
) => {
	let conversion = sharp(sourceFile).webp({ quality: options.quality ?? 90 });

	if (options.flop === true) {
		conversion = conversion.flop();
	}

	if (options.resize !== undefined) {
		conversion = conversion.resize(options.resize);
	}

	await writeFileWithCreateParentDir(
		outputFilePath,
		await conversion.toBuffer()
	);
};

/**
 * Converts images to webp and optionally modifies them.
 * **Warning! This function will delete all webp files in the
 * output directory that don't have a corresponding source file!**
 */
export const convertSingleImage = async (
	relativeSource: string,
	options: ConvertOptions = {}
) => {
	const sourceFile = root(
		"image-generator/image-source-files",
		relativeSource
	);
	console.info(`Converting "${sourceFile}"`);
	const withoutExt = path.parse(sourceFile).name;
	const outputSubPath = path.parse(relativeSource).dir;
	const outputDir = root("public/images/generated", outputSubPath);
	const outputFilePath = path.join(outputDir, withoutExt + ".webp");
	await runConversion(options, sourceFile, outputFilePath);
};

const removeWebpFilesWithoutSource = async (
	outputDir: string,
	generatedFilesRelative: string[]
) => {
	const containedFiles = await fs.readdir(outputDir);
	const deprecatedFiles = containedFiles
		.filter((file) => path.parse(file).ext.toLowerCase() === ".webp")
		.filter((file) => !generatedFilesRelative.includes(file));

	for (const file of deprecatedFiles) {
		const outputFile = path.join(outputDir, file);
		await fs.unlink(outputFile);
		console.log("Deleted", outputFile);
	}
};

const generateImageReexporter = async (
	generatedFilesRelative: string[],
	relativePath: string
) => {
	const segments = relativePath.split(path.sep);
	const parentDirs = segments.slice(0, -1);
	const reexporterName = segments[segments.length - 1];

	const outputDir = root(
		"image-generator/generated-image-indexes",
		...parentDirs
	);
	const outputFilePath = path.join(outputDir, reexporterName + ".ts");

	const imports = generatedFilesRelative
		.map((filePath, i) => {
			const relativeImportPath = `${relativePath}/${filePath}`.replace(
				/\\/g,
				"/"
			);
			return `import file${i} from "~generated-images/${relativeImportPath}";`;
		})
		.join("\n");

	const properties = generatedFilesRelative
		.map((file, i) => {
			const fileName = path.parse(file).name;
			return `  "${fileName}": file${i}`;
		})
		.join(",\n");

	const reexporterContents =
		imports +
		"\n\n" +
		"const images = {\n" +
		properties +
		"\n" +
		"};\n" +
		"\n" +
		"export default images;";

	await writeFileWithCreateParentDir(outputFilePath, reexporterContents);
};

/**
 * Converts images to webp and optionally modifies them.
 * **Warning! This function will delete all webp files in the
 * output directory that don't have a corresponding source file!**
 */
export const convertImages = async (
	relativeSource: string,
	options: ConvertOptions = {}
) => {
	const sourceDir = root(
		"image-generator/image-source-files",
		relativeSource
	);
	const outputDir = root("public/images/generated", relativeSource);

	console.info(`Converting images from "${sourceDir}"`);
	const sourceFiles = await fs.readdir(sourceDir);

	for (const sourceFileRelative of sourceFiles) {
		const withoutExt = path.parse(sourceFileRelative).name;
		const sourceFile = path.join(sourceDir, sourceFileRelative);
		const outputFile = path.join(outputDir, withoutExt + ".webp");

		await runConversion(options, sourceFile, outputFile);
	}

	const generatedFilesRelative = sourceFiles.map(
		(file) => path.parse(file).name + ".webp"
	);
	await generateImageReexporter(generatedFilesRelative, relativeSource);
	await removeWebpFilesWithoutSource(outputDir, generatedFilesRelative);
};
