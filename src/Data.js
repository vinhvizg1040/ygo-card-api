const fs = require("fs");
const axios = require("axios");

function saveData(data, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  // fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

async function fetchData() {
  try {
    const response = await axios.get(
      "https://json-db-rosy.vercel.app/api/ygo-card"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching or writing data:", error);
  }
}

async function fetchAndSave(filePath) {
  saveData(await fetchData(), filePath);
  console.log("cards.json generated.");
}

module.exports = Data = { fetchAndSave, fetchData, saveData };
