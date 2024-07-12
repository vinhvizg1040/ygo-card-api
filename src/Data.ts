// import fs from "fs";
import axios from "axios";

export class Data {
  private cards: Card[];

  // constructor(path?: string) {
  //   if (path) {
  //     this.cards = this.readData(path);
  //   } else {
  //     this.cards = [];
  //   }
  // }

  constructor() {
    this.cards = [];
  }

  // private readData(path: string) {
  //   try {
  //     const result = JSON.parse(fs.readFileSync(path, "utf-8")).data;
  //     return result;
  //   } catch (error) {
  //     console.error("Error fetching or writing data:", error);
  //     return [];
  //   }
  // }

  private async fetchData() {
    try {
      const response = await axios.get(
        "https://json-db-rosy.vercel.app/api/ygo-card"
      );
      this.cards = response.data.data;
    } catch (error) {
      console.error("Error fetching or writing data:", error);
      return [];
    }
  }

  // save(filePath: string) {
  //   fs.writeFileSync(filePath, JSON.stringify(this.cards, null, 2), "utf-8");
  //   console.log("cards.json generated.");
  // }

  async getData(): Promise<Card[]> {
    await this.fetchData();
    return this.cards;
  }
}
