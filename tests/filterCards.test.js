// const { Data, Query } = require("./index");
const ygo = require("ygo-card-api");

// Fetch and save data to file JSON in the first time
const filePath = "./cards.json";
ygo.Data.fetchAndSave(filePath);

// search from file JSON

// Sort the format of the cards (tcg, goat, ocg goat, speed duel, master duel, rush duel, duel links).
// Note: Duel Links is not 100% accurate but is close.
// Using tcg results in all cards with a set TCG Release Date and excludes Speed Duel/Rush Duel cards.

const duellinks = ygo.search(filePath, { formats: "Duel Links" });
console.log(duellinks);

const params = {
  name: "Baby Dragon|Time Wizard",
  atk: "1200",
  sort: "name",
  misc: "yes",
};
const results = ygo.search(filePath, params);

console.log(results);
