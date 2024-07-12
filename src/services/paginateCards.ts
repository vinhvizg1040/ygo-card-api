import fs from "fs";

interface Card {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  atk?: number;
  def?: number;
  level?: number;
  race?: string;
  attribute?: string;
  linkval?: number;
  linkmarkers?: string[];
  scale?: number;
  card_sets?: {
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_price: string;
  }[];
  card_images?: {
    id: number;
    image_url: string;
    image_url_small: string;
    image_url_cropped: string;
  }[];
  card_prices?: {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;
  }[];
  banlist_info?: {
    ban_tcg?: string;
    ban_ocg?: string;
    ban_goat?: string;
  };
  archetype?: string;
  misc?: {
    beta_name?: string;
    views?: number;
    viewsweek?: number;
    upvotes?: number;
    downvotes?: number;
    formats?: string[];
    treated_as?: string;
    tcg_date?: string;
    ocg_date?: string;
    konami_id?: number;
    md_rarity?: string;
    has_effect?: 0 | 1;
  };
}

function paginateCards(cards: any[], page: number, pageSize: number): Card[] {
  // Tính chỉ số bắt đầu và kết thúc của phân trang
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Trả về dữ liệu phân trang
  return cards.slice(startIndex, endIndex);
}

// Export hàm để có thể sử dụng như một module trong dự án npm
export default paginateCards;
