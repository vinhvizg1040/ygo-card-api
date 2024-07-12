import filterCards from "../src/services/filterCards";
import * as fs from "fs";

describe("filterCards", () => {
  let cards: Card[];

  beforeAll(() => {
    // Load test data from JSON file before tests
    cards = readJsonFile("../cards.json");
  });

  it("should filter cards by name", () => {
    const params = { name: "Baby Dragon" };
    const result = filterCards(cards, params);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Baby Dragon");
  });

  it("should filter cards by attack", () => {
    const params = { atk: "1200" };
    const result = filterCards(cards, params);
    // expect(result).toHaveLength(376);
    expect(result[0].atk).toBe(1200);
  });

  it("should filter cards by type and race", () => {
    const params = { type: "Normal Monster", race: "Dragon" };
    const result = filterCards(cards, params);
    expect(result[0].type).toBe("Normal Monster");
    expect(result[0].race).toBe("Dragon");
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

// Function to read JSON data from a file
function readJsonFile(path: string): Card[] {
  try {
    const jsonData = fs.readFileSync(path, "utf8");
    return JSON.parse(jsonData).data as Card[];
  } catch (error) {
    console.error("Unexpected end of JSON input");
    return [];
  }
}
