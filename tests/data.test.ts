import { Data } from "../index";
const path = require('path');

describe("Pagination function", () => {
  let data: Data;
  const jsonFilePath = path.join(__dirname, '../cards.json');
  beforeAll(async () => {
    // Load test data from JSON file before tests
    data = new Data(jsonFilePath);
    // Or from api
    // data = new Data();
  });
  it("should check non-empty data", async () => {
    const result = await data.getData();
    // Check if the array is not empty
    expect(result.length).toBeGreaterThan(0);
  });
});
