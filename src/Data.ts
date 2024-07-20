import fs from "fs";
import axios from "axios";

export class Data {
  private cards: Card[];

  // IDK something wroong here
  constructor(path?: string) {
    this.cards = [];
    if (path) {
      this.cards = this.readData(path);
    } else {
      this.fetchData();
    }
  }

  private readData(path: string) {
    try {
      const result = JSON.parse(fs.readFileSync(path, "utf-8")).data;
      return result;
    } catch (error) {
      console.error("Error fetching or writing data:", error);
      return [];
    }
  }

  // Or here
  private async fetchData() {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes"
        // "https://json-db-rosy.vercel.app/api/ygo-card"
      );
      this.cards = response.data.data;
    } catch (error) {
      console.error("Error fetching or writing data:", error);
      return [];
    }
  }

  save(filePath: string) {
    fs.writeFileSync(filePath, JSON.stringify(this.cards, null, 2), "utf-8");
    console.log("cards.json generated.");
  }

  async getData(): Promise<Card[]> {
    // That why i use it
    if (!this.cards.length) {
      await this.fetchData();
    }
    return this.cards;
  }
}
