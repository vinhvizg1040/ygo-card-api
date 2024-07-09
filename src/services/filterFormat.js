function filterFormats(data, params) {
  // Split multiple values into arrays for specific parameters
  const splitParams = ["name", "id", "type", "race", "attribute", "linkmarker"];
  splitParams.forEach((param) => {
    if (params[param]) {
      params[param] = params[param].split(param === "id" ? "," : "|");
    }
  });

  return data
    .filter((card) => {
      // Filter by formats in misc_info
      if (params.formats && !card.misc_info[0].formats.includes(params.formats))
        return false;
      return true;
    })
    .sort((a, b) => {
      // Sort the cards
      if (params.sort) {
        const sortField = params.sort;
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      }
      return 0;
    })
    .map((card) => {
      // Add misc information if requested
      if (params.misc === "yes") {
        card.details = "additional info here"; // Replace with actual misc info
      }
      return card;
    });
}

module.exports = filterFormats;

// // Example usage
// const params = {
//     name: 'Baby Dragon|Time Wizard',
//     atk: '1200',
//     sort: 'name',
//     misc: 'yes'
// };

// const filteredCards = filterCards(data, params);
// // console.log(filteredCards);
// fs.writeFileSync('carditest.json', JSON.stringify(filteredCards, null, 2));

// console.log('Tổng số thẻ:', totalCards);
