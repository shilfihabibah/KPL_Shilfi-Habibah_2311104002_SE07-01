import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ReadJSON() {
  try {
    const filePath = path.join(__dirname, "tp7.json");
    const jsonData = await readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    console.log("Daftar mata kuliah yang diambil:");
    data.courses.forEach((course, index) => {
      console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat membaca file JSON:", error.message);
  }
}

ReadJSON();