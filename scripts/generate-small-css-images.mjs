import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const generatedDir = "./public/images/generated";

const sourceDir = "./image-source-files/css";
const targetDir = path.join(generatedDir, "css");

const files = await fs.readdir(sourceDir);

// create directory if it doesn't exist

try {
  await fs.access(targetDir);
} catch (error) {
  if (error.code === "ENOENT") {
    await fs.mkdir(generatedDir);
    await fs.mkdir(targetDir);
  } else {
    throw error;
  }
}

// generate files

for (const file of files) {
  const withoutExt = path.parse(file).name;

  const sourceFile = path.join(sourceDir, file);
  const targetFile = path.join(targetDir, withoutExt + ".webp");

  console.log(targetFile);

  await sharp(sourceFile)
    .resize({ width: 80, height: 80 })
    .flop()
    .webp({ quality: 50 })
    .toFile(targetFile);
}

// remove everything in the directory that wasn't just generated

const containedFiles = await fs.readdir(targetDir);
const generatedFiles = files.map(file => path.parse(file).name + ".webp");
const deprecatedFiles = containedFiles.filter(file => !generatedFiles.includes(file));

for (const file of deprecatedFiles) {
  const targetFile = path.join(targetDir, file);
  await fs.unlink(targetFile);
  console.log("Deleted", targetFile);
}