import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

/** @param {string} dirPath */
const createSingleDirIfNotExists = async dirPath => {
  try {
    await fs.access(dirPath);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(dirPath);
    } else {
      throw error;
    }
  }
};

/** @param {string[]} paths */
const root = (...paths) => (
  path.join(process.cwd(), ...paths)
);

/**
 * Given "foo/bar/baz" will create "foo", "foo/bar" and "foo/bar/baz" if they don't exist
 * @param {tring} dirPath
 */
const createDirIfNotExists = async dirPath => {
  const subpaths = dirPath
    .split(path.sep)
    .filter(segment => segment !== "")
    .reduce((prev, cur, index) => {
      const prevPath = prev[index - 1];
      const newValue = prevPath === undefined ? cur : path.join(prevPath, cur);
      prev.push(newValue);
      return prev;
    }, []);

  for (const subpath of subpaths) {
    await createSingleDirIfNotExists(subpath);
  }
};

/**
 * @param {{
 *    resize?: import("sharp").ResizeOptions,
 *    flop?: boolean,
 *    quality?: number
 * }} options
 * @param {string} sourceFile
 * @param {string} outputFile
 */
const runConversion = async (options, sourceFile, outputFile) => {
  let conversion = sharp(sourceFile)
    .webp({ quality: options.quality ?? 90 });

  if (options.flop === true) {
    conversion = conversion.flop();
  }

  if (options.resize !== undefined) {
    conversion = conversion.resize(options.resize);
  }

  await conversion.toFile(outputFile);
};

/**
 * Converts images to webp and optionally modifies them.
 * **Warning! This function will delete all webp files in the
 * output directory that don't have a corresponding source file!**
 * @param {{
 *    resize?: import("sharp").ResizeOptions,
 *    flop?: boolean,
 *    quality?: number
 * }} options
 */
export const convertSingleImage = async (relativeSource, options = {}) => {
  const sourceFile = root("src/image-source-files", relativeSource);
  console.info(`Converting "${sourceFile}"`);
  const withoutExt = path.parse(sourceFile).name;
  const outputSubPath = path.parse(relativeSource).dir;
  const outputDir = root("public/images/generated", outputSubPath);
  await createDirIfNotExists(outputDir);
  const outputFile = path.join(outputDir, withoutExt + ".webp");
  await runConversion(options, sourceFile, outputFile);
};

/**
 * @param {string} outputDir
 * @param {string[]} generatedFilesRelative
 */
const removeWebpFilesWithoutSource = async (outputDir, generatedFilesRelative) => {
  const containedFiles = await fs.readdir(outputDir);
  const deprecatedFiles = containedFiles
    .filter(file => path.parse(file).ext.toLowerCase() === ".webp")
    .filter(file => !generatedFilesRelative.includes(file));

  for (const file of deprecatedFiles) {
    const outputFile = path.join(outputDir, file);
    await fs.unlink(outputFile);
    console.log("Deleted", outputFile);
  }
};

/**
 * @param {string[]} generatedFilesRelative
 * @param {string} relativePath
 */
const generateImageReexporter = async (generatedFilesRelative, relativePath) => {
  const segments = relativePath.split(path.sep);
  const parentDirs = segments.slice(0, -1);
  const reexporterName = segments[segments.length - 1];

  const outputDir = root("src/generated/capsules", ...parentDirs);
  await createDirIfNotExists(outputDir);
  const outputFile = path.join(outputDir, reexporterName + ".ts");

  const imports = generatedFilesRelative
    .map((filePath, i) => {
      const relativeImportPath = `${relativePath}/${filePath}`.replace(/\\/g, "/");
      return `import file${i} from "~generated-images/${relativeImportPath}";`;
    })
    .join("\n");

  const properties = generatedFilesRelative
    .map((file, i) => {
      const fileName = path.parse(file).name;
      return `  "${fileName}": file${i}`;
    })
    .join(",\n");

  const reexporterContents = imports
    + "\n\n"
    + "const images = {\n"
    + properties + "\n"
    + "};\n"
    + "\n"
    + "export default images;";

  await fs.writeFile(outputFile, reexporterContents);
};

/**
 * Converts images to webp and optionally modifies them.
 * **Warning! This function will delete all webp files in the
 * output directory that don't have a corresponding source file!**
 * @param {{
 *    resize?: import("sharp").ResizeOptions,
 *    flop?: boolean,
 *    quality?: number
 * }} options
 */
export const convertImages = async (relativeSource, options = {}) => {
  const sourceDir = root("src/image-source-files", relativeSource);
  const outputDir = root("public/images/generated", relativeSource);

  console.info(`Converting images from "${sourceDir}"`);
  const sourceFiles = await fs.readdir(sourceDir);
  await createDirIfNotExists(outputDir);

  for (const sourceFileRelative of sourceFiles) {
    const withoutExt = path.parse(sourceFileRelative).name;
    const sourceFile = path.join(sourceDir, sourceFileRelative);
    const outputFile = path.join(outputDir, withoutExt + ".webp");
    
    await runConversion(options, sourceFile, outputFile);
  }

  const generatedFilesRelative = sourceFiles.map(file => path.parse(file).name + ".webp");
  await generateImageReexporter(generatedFilesRelative, relativeSource);
  await removeWebpFilesWithoutSource(outputDir, generatedFilesRelative);
};