// const { Data, Query } = require("./index");
const { Data, Search } = require("ygo-card");

const filePath = "./cards.json";

(async () => {
  // Lấy dữ liệu từ URL và lưu vào file JSON
  // await fetchAndSave(filePath);

  // Sort the format of the cards (tcg, goat, ocg goat, speed duel, master duel, rush duel, duel links).
  // Note: Duel Links is not 100% accurate but is close.
  // Using tcg results in all cards with a set TCG Release Date and excludes Speed Duel/Rush Duel cards.

  // queryData from file JSON
  // const results = Search.search(filePath, { formats: "Duel Links" });
  // const params = {
  //   name: "Baby Dragon|Time Wizard",
  //   atk: "1200",
  //   sort: "name",
  //   misc: "yes",
  // };
  
  console.log(results);
})();

async function fetchAndSave(filePath) {
  Data.fetchAndSave(filePath);
}

function query(params) {
  // Example
  // const params = {
  //   name: "Baby Dragon|Time Wizard",
  //   atk: "1200",
  //   sort: "name",
  //   misc: "yes",
  // };
  const results = Search.search(filePath, params);
  return results;
}
