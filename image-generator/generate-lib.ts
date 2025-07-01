import fs from "node:fs/promises";
import path from "node:path";
import sharp, { type ResizeOptions } from "sharp";

export const folder = async (
  relativeFolder: string,
  options: ConvertOptions = {}
) => {
  const sourceFiles = await fs.readdir(
    `./image-generator/image-source-files/${relativeFolder}`
  );

  for (const file of sourceFiles) {
    single(`${relativeFolder}/${file}`, options);
  }

  generateImageReexporter(sourceFiles, relativeFolder);
};

export const single = async (
  relativeFile: string,
  options: ConvertOptions = {}
) =>
  runConversion(
    options,
    `./image-generator/image-source-files/${relativeFile}`,
    `./public/images/generated/${relativeFile}`
  );

type ConvertOptions = {
  resize?: ResizeOptions;
  flop?: boolean;
  quality?: number;
};

const runConversion = async (
  options: ConvertOptions,
  input: string,
  output: string
) =>
  saveFile(
    output.replace(/\.[^.]+$/, ".webp"),
    await sharp(input)
      .webp({
        quality: options.quality ?? 90,
      })
      .flop(options.flop ?? false)
      .resize(options.resize)
      .toBuffer()
  );

const generateImageReexporter = (
  sourceFiles: string[],
  relativePath: string
) => {
  const reexporterContent = `
    ${sourceFiles
      .map((file, i) => {
        const webp = file.replace(/\.[^.]+$/, ".webp");
        const relativeImport = `${relativePath}/${webp}`.replace(/\\/g, "/");
        return `import file${i} from "~generated-images/${relativeImport}";`;
      })
      .join("\n")}

    const images = {
      ${sourceFiles
        .map((file, i) => `"${path.parse(file).name}": file${i}`)
        .join(",\n")}
    };

    export default images;
  `;

  const segments = relativePath.split(path.sep);

  saveFile(
    path.join(
      "image-generator/generated-image-indexes",
      ...segments.slice(0, -1),
      segments.at(-1) + ".ts"
    ),
    reexporterContent
  );
};

const saveFile = (file: string, data: string | Buffer) => {
  fs.mkdir(path.dirname(file), { recursive: true }).finally(() =>
    fs.writeFile(file, data, "utf-8")
  );
};
