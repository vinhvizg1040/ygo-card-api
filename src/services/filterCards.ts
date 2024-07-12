function filterCards(cards: any[], params: { [key: string]: any }) {
  // Split multiple values into arrays for specific parameters
  const splitParams = ["name", "id", "type", "race", "attribute", "linkmarker"];
  splitParams.forEach((param) => {
    if (params[param]) {
      params[param] = params[param].split(param === "id" ? "," : "|");
    }
  });

  return cards
    .filter((card) => {
      // Filter by formats in misc_info
      if (params.formats && !card.misc_info[0].formats.includes(params.formats))
        return false;

      // Filter by name
      if (params.name && !params.name.includes(card.name)) return false;

      // Filter by fuzzy name (fname)
      if (
        params.fname &&
        !card.name.toLowerCase().includes(params.fname.toLowerCase())
      )
        return false;

      // Filter by id
      if (params.id && !params.id.includes(card.id.toString())) return false;

      // Filter by konami_id
      if (params.konami_id && card.konami_id !== params.konami_id) return false;

      // Filter by type
      if (params.type && !params.type.includes(card.type)) return false;

      // Filter by atk
      if (params.atk && card.atk !== parseInt(params.atk, 10)) return false;

      // Filter by def
      if (params.def && card.def !== parseInt(params.def, 10)) return false;

      // Filter by level
      if (params.level && card.level !== parseInt(params.level, 10))
        return false;

      // Filter by race
      if (params.race && !params.race.includes(card.race)) return false;

      // Filter by attribute
      if (params.attribute && !params.attribute.includes(card.attribute))
        return false;

      // Filter by link
      if (params.link && card.link !== parseInt(params.link, 10)) return false;

      // Filter by linkmarker
      if (
        params.linkmarker &&
        !params.linkmarker.every((marker: any) => card.linkmarkers.includes(marker))
      )
        return false;

      // Filter by scale
      if (params.scale && card.scale !== parseInt(params.scale, 10))
        return false;

      // Filter by cardset
      if (
        params.cardset &&
        !card.card_sets.some((set: any) => set.set_name === params.cardset)
      )
        return false;

      // Filter by archetype
      if (params.archetype && card.archetype !== params.archetype) return false;

      // Filter by banlist
      if (params.banlist && !card.banlist_info[params.banlist]) return false;

      // Filter by staple
      if (params.staple && card.staple !== (params.staple === "true"))
        return false;

      // Filter by has_effect
      if (
        params.has_effect &&
        card.has_effect !== (params.has_effect === "true")
      )
        return false;

      // Filter by date range and region
      // if ((params.startdate || params.enddate) && params.dateregion) {
      //   const releaseDate = new Date(card.release_date[params.dateregion]);
      //   const startDate = params.startdate ? new Date(params.startdate) : null;
      //   const endDate = params.enddate ? new Date(params.enddate) : null;

      //   if (
      //     (startDate && releaseDate < startDate) ||
      //     (endDate && releaseDate > endDate)
      //   ) {
      //     return false;
      //   }
      // }

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

export default filterCards;

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
