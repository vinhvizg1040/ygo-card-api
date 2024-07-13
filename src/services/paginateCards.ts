function paginateCards(cards: any[], page: number, pageSize: number): Card[] {
  // Tính chỉ số bắt đầu và kết thúc của phân trang
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Trả về dữ liệu phân trang
  return cards.slice(startIndex, endIndex);
}

// Export hàm để có thể sử dụng như một module trong dự án npm
export default paginateCards;
