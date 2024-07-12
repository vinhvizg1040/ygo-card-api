import * as fs from "fs";
import filterCards from "./services/filterCards";
import paginateCards from "./services/paginateCards";

interface SearchParams {
  // Define the structure of search params
  [key: string]: string;
}

export function search(filePath: string, params: SearchParams) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return filterCards(data.data, params);
}

export function page(filePath: string, page: number, pageSize: number) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return paginateCards(data.data, page, pageSize);
}
