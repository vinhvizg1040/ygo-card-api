const fs = require("fs");
const filterCards = require("./services/filterCards");

function search(filePath, params) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return filterCards(data.data, params);
}

module.exports = SearchCards = { search };
