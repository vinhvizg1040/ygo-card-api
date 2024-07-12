import { Data, CardSearch } from "../index"; // Import your pagination function

describe("Pagination function", () => {
  let cards: CardSearch;
  let data: Data;

  beforeAll(async () => {
    // Load test data from JSON file before tests
    // data = new Data("cards.json");
    // Or from api
    data = new Data();
    cards = new CardSearch(await data.getData());
  });

  it("Should paginate correctly with page 1 and page size 10", () => {
    const page = 1;
    const pageSize = 10;
    const result = cards.page(page, pageSize);

    // Kiểm tra xem trang đầu tiên có đúng số lượng phần tử như mong đợi
    expect(result).toHaveLength(pageSize);
    // Kiểm tra xem phần tử đầu tiên có tên là gì (ví dụ: Blue-Eyes White Dragon)
    expect(result[0].name).toBeDefined(); // Đảm bảo rằng tên là không rỗng
  });

  it("Should paginate correctly with page 2 and page size 10", () => {
    const page = 2;
    const pageSize = 10;
    const result = cards.page(page, pageSize);

    // Kiểm tra xem trang thứ hai có đúng số lượng phần tử như mong đợi
    expect(result).toHaveLength(pageSize);
    // Kiểm tra xem phần tử đầu tiên có tên là gì (ví dụ: Red-Eyes Black Dragon)
    expect(result[0].name).toBeDefined(); // Đảm bảo rằng tên là không rỗng
  });

  it("Should return empty array for out-of-range page", () => {
    const page = 2000;
    const pageSize = 10;
    const result = cards.page(page, pageSize);

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
