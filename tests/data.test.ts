import { Data } from "../index";

describe("Pagination function", () => {
  let data: Data;

  beforeAll(async () => {
    // Load test data from JSON file before tests
    // data = new Data(jsonFilePath);
    // Or from api
    data = new Data();
  });
  it("should check non-empty data", async () => {
    const result = await data.getData();
    // Check if the array is not empty
    expect(result.length).toBeGreaterThan(0);
  });
});
