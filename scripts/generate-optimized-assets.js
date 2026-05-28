import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORTFOLIO_DIR = path.join(__dirname, '../src/assets/Portfolio-Compressed');
const MYPICTURE_DIR = path.join(__dirname, '../src/assets/mypicture');
const PLACEHOLDERS_FILE = path.join(__dirname, '../src/data/imagePlaceholders.json');

const placeholders = {};

async function getLQIP(srcPath) {
  try {
    const buffer = await sharp(srcPath)
      .resize(20, 20, { fit: 'inside' })
      .webp({ quality: 20 })
      .toBuffer();
    return `data:image/webp;base64,${buffer.toString('base64')}`;
  } catch (err) {
    console.error(`Failed to generate LQIP for ${srcPath}:`, err);
    return '';
  }
}

async function processFile(srcPath, relDir, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, ext);
  
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const destWebp = path.join(relDir, `${baseName}.webp`);
  const destAvif = path.join(relDir, `${baseName}.avif`);

  // Generate WebP if it doesn't exist
  if (ext !== '.webp' && !fs.existsSync(destWebp)) {
    console.log(`Generating WebP for ${fileName}...`);
    try {
      await sharp(srcPath)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(destWebp);
    } catch (err) {
      console.error(`Error generating WebP for ${fileName}:`, err);
    }
  }

  // Generate AVIF if it doesn't exist
  if (!fs.existsSync(destAvif)) {
    console.log(`Generating AVIF for ${fileName}...`);
    try {
      const inputPath = ext === '.webp' ? srcPath : (fs.existsSync(destWebp) ? destWebp : srcPath);
      await sharp(inputPath)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .avif({ quality: 65 })
        .toFile(destAvif);
    } catch (err) {
      console.error(`Error generating AVIF for ${fileName}:`, err);
    }
  }

  // Generate LQIP placeholder using the WebP version (or source if WebP isn't ready)
  const lqipSource = fs.existsSync(destWebp) ? destWebp : srcPath;
  const lqip = await getLQIP(lqipSource);
  
  // Save placeholder using a key based on project path & base name
  // e.g. "ClownTown/Clown Town" or "mypicture/mypicture_paper_cutout"
  const parentDir = path.basename(relDir);
  const key = `${parentDir}/${baseName}`;
  placeholders[key] = lqip;
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await processFile(fullPath, dir, entry.name);
    }
  }
}

async function run() {
  console.log('Starting asset optimization...');
  
  if (fs.existsSync(PORTFOLIO_DIR)) {
    await processDirectory(PORTFOLIO_DIR);
  }
  
  if (fs.existsSync(MYPICTURE_DIR)) {
    await processDirectory(MYPICTURE_DIR);
  }

  fs.writeFileSync(PLACEHOLDERS_FILE, JSON.stringify(placeholders, null, 2));
  console.log(`Placeholders written to ${PLACEHOLDERS_FILE}`);
  console.log('Asset optimization complete!');
}

run().catch(console.error);
