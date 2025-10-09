import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readJSON(filename) {
  const filePath = path.join(__dirname, 'data', filename);
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

export const users = readJSON('users.json');
export const states = readJSON('states.json');
export const categories = readJSON('categories.json');
export const news = readJSON('news.json');
export const profiles = readJSON('profiles.json');
