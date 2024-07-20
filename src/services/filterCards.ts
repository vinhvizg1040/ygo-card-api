import Fuse from "fuse.js";

let fuse: Fuse<any>;

function initializeFuse(cards: any[]) {

  // Tùy chọn cấu hình cho Fuse.js
  const fuseOptions = {
    keys: ["name"],
    threshold: 0.0, // Chỉ trả về các kết quả phù hợp hoàn hảo
  };

  // Khởi tạo Fuse với dữ liệu và tùy chọn cấu hình
  fuse = new Fuse(cards, fuseOptions);
}

function filterCards(cards: any[], params: { [key: string]: any }) {
  // Split multiple values into arrays for specific parameters
  const splitParams = ["name", "id", "type", "race", "attribute", "linkmarker"];
  splitParams.forEach((param) => {
    if (params[param]) {
      params[param] = params[param].split(param === "id" ? "," : "|");
    }
  });

  // Khởi tạo Fuse nếu cần thiết
  initializeFuse(cards);

  // Nếu có fuzzy name (fname), thực hiện tìm kiếm một lần duy nhất
  let fuzzyNames: string[] = [];
  if (params.fname) {
    const fuzzyResults = fuse.search(params.fname);
    fuzzyNames = fuzzyResults.map((result: any) => result.item.name);
  }

  return cards
    .filter((card) => {
      return [
        // Filter by formats in misc_info
        !params.formats || card.misc_info[0].formats.includes(params.formats),

        // Filter by name
        !params.name || params.name.includes(card.name),

        // Filter by fuzzy name (fname)
        !params.fname || fuzzyNames.includes(card.name),

        // Filter by id
        !params.id || params.id.includes(card.id.toString()),

        // Filter by konami_id
        !params.konami_id || card.konami_id === params.konami_id,

        // Filter by type
        !params.type || params.type.includes(card.type),

        // Filter by atk
        !params.atk || card.atk === parseInt(params.atk, 10),

        // Filter by def
        !params.def || card.def === parseInt(params.def, 10),

        // Filter by level
        !params.level || card.level === parseInt(params.level, 10),

        // Filter by race
        !params.race || params.race.includes(card.race),

        // Filter by attribute
        !params.attribute || params.attribute.includes(card.attribute),

        // Filter by link
        !params.link || card.link === parseInt(params.link, 10),

        // Filter by linkmarker
        !params.linkmarker ||
          params.linkmarker.every((marker: any) =>
            card.linkmarkers.includes(marker)
          ),

        // Filter by scale
        !params.scale || card.scale === parseInt(params.scale, 10),

        // Filter by cardset
        !params.cardset ||
          card.card_sets.some((set: any) => set.set_name === params.cardset),

        // Filter by archetype
        !params.archetype || card.archetype === params.archetype,

        // Filter by banlist
        !params.banlist || card.banlist_info[params.banlist],

        // Filter by staple
        !params.staple || card.staple === (params.staple === "true"),

        // Filter by has_effect
        !params.has_effect ||
          card.has_effect === (params.has_effect === "true"),
      ].every(Boolean);
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

// Example usage
// const params = {
//     name: 'Baby Dragon|Time Wizard',
//     atk: '1200',
//     sort: 'name',
//     misc: 'yes'
// };

// const filteredCards = filterCards(data, params);
// fs.writeFileSync('carditest.json', JSON.stringify(filteredCards, null, 2));

// console.log('Tổng số thẻ:', totalCards);
