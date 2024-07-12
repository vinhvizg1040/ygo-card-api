import filterCards from "../src/services/filterCards";

// Sample data for testing
const sampleCards = [
  {
    id: "1",
    name: "Baby Dragon",
    atk: 1200,
    def: 700,
    type: "Dragon",
    race: "Dragon",
    attribute: "Fire",
    level: 3,
    link: 0,
    scale: 0,
    card_sets: [{ set_name: "Set1" }],
    archetype: "Dragon",
    banlist_info: { tcg: "Limited" },
    staple: true,
    has_effect: true,
    release_date: { tcg: "2022-01-01" },
    misc_info: [{ formats: ["OCG", "TCG"] }],
  },
  {
    id: "2",
    name: "Time Wizard",
    atk: 500,
    def: 400,
    type: "Spellcaster",
    race: "Spellcaster",
    attribute: "Light",
    level: 2,
    link: 0,
    scale: 0,
    card_sets: [{ set_name: "Set2" }],
    archetype: "Wizard",
    banlist_info: { tcg: "Unlimited" },
    staple: false,
    has_effect: true,
    release_date: { tcg: "2022-02-01" },
    misc_info: [{ formats: ["OCG", "TCG"] }],
  },
];

describe("filterCards", () => {
  it("should filter cards by name", () => {
    const params = { name: "Baby Dragon" };
    const result = filterCards(sampleCards, params);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Baby Dragon");
  });

  it("should filter cards by attack", () => {
    const params = { atk: "1200" };
    const result = filterCards(sampleCards, params);
    expect(result).toHaveLength(1);
    expect(result[0].atk).toBe(1200);
  });

  it("should filter cards by type and race", () => {
    const params = { type: "Dragon", race: "Dragon" };
    const result = filterCards(sampleCards, params);
    expect(result).toHaveLength(1);
    expect(result[0].type).toBe("Dragon");
    expect(result[0].race).toBe("Dragon");
  });

  it("should filter cards by release date range", () => {
    const params = {
      startdate: "2022-01-01",
      enddate: "2022-01-31",
      dateregion: "tcg",
    };
    const result = filterCards(sampleCards, params);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Baby Dragon");
  });
});
