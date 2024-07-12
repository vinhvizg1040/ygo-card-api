import * as fs from "fs";
import filterCards from "./services/filterCards";
import paginateCards from "./services/paginateCards";

interface SearchParams {
  // Define the structure of search params
  [key: string]: string;
}

export class CardSearch {
  private data: Card[];

  constructor(data: Card[]) {
    this.data = data;
  }

  search(params: SearchParams, page?: number, pageSize?: number) {
    // Set default values for page and pageSize if not provided
    if (page && pageSize) {
      return paginateCards(filterCards(this.data, params), page, pageSize);
    }
    return filterCards(this.data, params);
  }
  page(page: number, pageSize: number) {
    return paginateCards(this.data, page, pageSize);
  }
}
