import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// ES module helper untuk __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fungsi baca JSON
async function readJSON() {
  try {
    const filePath = path.join(__dirname, "jurnal7.json");
    const jsonData = await readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    console.log("Team member list:");
    data.members.forEach((member) => {
      console.log(
        `${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`
      );
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

readJSON();