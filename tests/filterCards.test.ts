import { Data, CardSearch } from "../index";
const path = require("path");

describe("filterCards", () => {
  let cards: CardSearch;
  let data: Data;

  // const jsonFilePath = path.join(__dirname, "../cards.json");

  beforeAll(async () => {
    // Load test data from JSON file before tests
    // data = new Data(jsonFilePath);
    // Or from api
    data = new Data();
    cards = new CardSearch(await data.getData());
  });

  it("should filter cards by name", () => {
    const params = { name: "Baby Dragon" };
    const result = cards.search(params);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Baby Dragon");
  });

  it("should filter cards by attack", () => {
    const params = { atk: "1200" };
    const result = cards.search(params);
    // expect(result).toHaveLength(376);
    expect(result[0].atk).toBe(1200);
  });

  it("should filter cards by type and race", () => {
    const params = { type: "Normal Monster", race: "Dragon" };
    const result = cards.search(params);
    expect(result[0].type).toBe("Normal Monster");
    expect(result[0].race).toBe("Dragon");
  });

  it("should filter cards by fname", () => {
   
    const params = { fname: "Magician" };
    const result = cards.search(params);
    expect(result.length).toBeGreaterThan(0);
  });

  // it("should filter cards by release date range", () => {
  //   const params = {
  //     startdate: "2022-01-01",
  //     enddate: "2022-01-31",
  //     dateregion: "tcg_date",
  //   };
  //   const result = filterCards(cards, params);
  //   expect(result).toHaveLength(1);
  //   expect(result[0].name).toBe("Baby Dragon");
  // });
});
