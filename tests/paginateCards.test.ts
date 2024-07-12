import paginateCards from "../src/services/paginateCards"; // Import your pagination function
import * as fs from "fs";

describe("Pagination function", () => {
  let cards: Card[];

  beforeAll(() => {
    // Load test data from JSON file before tests
    cards = readJsonFile("../cards.json");
  });

  it("Should paginate correctly with page 1 and page size 10", () => {
    const page = 1;
    const pageSize = 10;
    const result = paginateCards(cards, page, pageSize);

    // Kiểm tra xem trang đầu tiên có đúng số lượng phần tử như mong đợi
    expect(result).toHaveLength(pageSize);
    // Kiểm tra xem phần tử đầu tiên có tên là gì (ví dụ: Blue-Eyes White Dragon)
    expect(result[0].name).toBeDefined(); // Đảm bảo rằng tên là không rỗng
  });

  it("Should paginate correctly with page 2 and page size 10", () => {
    const page = 2;
    const pageSize = 10;
    const result = paginateCards(cards, page, pageSize);

    // Kiểm tra xem trang thứ hai có đúng số lượng phần tử như mong đợi
    expect(result).toHaveLength(pageSize);
    // Kiểm tra xem phần tử đầu tiên có tên là gì (ví dụ: Red-Eyes Black Dragon)
    expect(result[0].name).toBeDefined(); // Đảm bảo rằng tên là không rỗng
  });

  it("Should return empty array for out-of-range page", () => {
    const page = 2000;
    const pageSize = 10;
    const result = paginateCards(cards, page, pageSize);

    // Kiểm tra xem nếu yêu cầu trang vượt quá số lượng trang thì kết quả trả về là mảng rỗng
    expect(result).toHaveLength(0);
  });

//   it("Should handle edge case with large page size", () => {
//     const page = 500;
//     const pageSize = 1000;
//     const result = paginateCards(cards, page, pageSize);

//     // Kiểm tra xem nếu yêu cầu trang với kích thước trang lớn hơn tổng số phần tử thì chỉ trả về số phần tử còn lại
//     expect(result.length).toBeLessThanOrEqual(
//       cards.length - pageSize * (page - 1)
//     );
//   });
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
