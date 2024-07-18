import { Data } from "../index";

describe("Pagination function", () => {
  let data: Data;

  beforeAll(async () => {
    // Load test data from JSON file before tests
    // data = new Data(jsonFilePath);
    // Or from api
    data = new Data();
  });
  it("should check empty data", async () => {
    const result = await data.getData();
    // console.log(result);
    expect(result).toHaveLength(1);
  });
});
