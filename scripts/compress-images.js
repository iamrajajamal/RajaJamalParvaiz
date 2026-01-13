
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../src/assets/Portfolio');
const DEST_DIR = path.join(__dirname, '../src/assets/Portfolio-Compressed');

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function processDirectory(dir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(dir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(srcPath, destPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        // Change extension to .webp
        const destFile = destPath.replace(ext, '.webp');
        
        console.log(`Processing: ${entry.name}`);
        
        try {
            await sharp(srcPath)
            .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true }) // reasonable max size
            .webp({ quality: 80 })
            .toFile(destFile);
        } catch (error) {
            console.error(`Error processing ${entry.name}:`, error);
        }
      }
    }
  }
}

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR);
}

processDirectory(SOURCE_DIR, DEST_DIR)
  .then(() => console.log('Compression complete!'))
  .catch(err => console.error(err));
