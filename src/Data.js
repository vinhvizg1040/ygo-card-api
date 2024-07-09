const fs = require("fs");

function saveData(data, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  // fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

async function fetchData() {
  try {
    const response = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching or writing data:", error);
  }
}

async function fetchAndSave(filePath) {
  saveData(fetchData(), filePath);
}

module.exports = Data = { fetchAndSave, fetchData, saveData };
