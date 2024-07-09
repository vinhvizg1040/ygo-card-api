const fs = require("fs");
const filterCards = require("./services/filterCards");
const filterFormat = require("./services/filterFormat");

function format(filePath, params) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return filterFormat(data.data, params);
}

function query(filePath, params) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return filterCards(data.data, params);
}

module.exports = queryCards = { query, format };
