import * as fs from "fs";
import axios from "axios";

function saveData(cards: any[], filePath: string) {
  fs.writeFileSync(filePath, JSON.stringify(cards, null, 2), "utf-8");
  // fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

async function fetchData(): Promise<any[]> {
  try {
    const response = await axios.get(
      "https://json-db-rosy.vercel.app/api/ygo-card"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching or writing data:", error);
    return [];
  }
}

async function fetchAndSave(filePath: string): Promise<void> {
  const data = await fetchData();
  saveData(data, filePath);
  console.log("cards.json generated.");
}

export { fetchAndSave, fetchData, saveData };
