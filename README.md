# Yugioh - Card - API

![npm](https://img.shields.io/npm/v/ygo-card-api) ![license](https://img.shields.io/npm/l/ygo-card-api) ![downloads](https://img.shields.io/npm/dm/ygo-card-api)

A package that supports working with Yugioh card data.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Yugioh - Card - API package was created to provide an easy and efficient way to work with Yugioh card data. This package addresses the need for a standardized and convenient tool to search, retrieve, and manipulate Yugioh card information. Whether you're a developer building a Yugioh-themed application, a fan looking to organize your collection, or a researcher analyzing card data, this package offers the functionality you need.

## Features

List out the main features of your project:

- **Card Search API:** Quickly search for Yugioh cards by name, type, attribute, and more.
- **Card Data Retrieval:** Access detailed information about each card, including stats, effects, and descriptions.

## Installation

Provide clear instructions on how to install your package.

```cmd
npm install ygo-card-api
```

## Examples

```javascript
const  ygo  =  require("ygo-card-api");

// Fetch and save data to file JSON in the first time
const  filePath  =  "./cards.json";
ygo.Data.fetchAndSave(filePath);

// search from file JSON

// Sort the format of the cards (tcg, goat, ocg goat, speed duel, master duel, rush duel, duel links).
const duellinks = ygo.search(filePath, { formats: "Duel Links" });
// Log: List of duel links card
console.log(duellinks);

// Search Option: formats, name, fname, id, konami_id, type, atk, def, level, race, attribute, 
// link, linkmarker, scale, cardsetm archetype, banlist, staple, has_effect, startdate, enddate, dateregion.
// misc: "yes" (if you want additional info).
// sort: search_option (if you want sort with name or atk,...)
const params = {
  name: "Baby Dragon|Time Wizard",
  atk: "1200",
  sort: "name",
  misc: "yes",
};
const results = ygo.search(filePath, params);

console.log(results);
```

## Contributing

Explain how others can contribute to your project.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
Yu-Gi-Oh! is a trademark of Shueisha and Konami. This project is not affiliated with or endorsed by Shueisha or Konami.
