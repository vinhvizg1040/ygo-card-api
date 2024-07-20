# Yugioh - Card - API

![npm](https://img.shields.io/npm/v/@vinhvizg/ygo-card-api) ![license](https://img.shields.io/npm/l/@vinhvizg/ygo-card-api) ![downloads](https://img.shields.io/npm/dm/@vinhvizg/ygo-card-api) [![Node.js Package](https://github.com/vinhvizg1040/@vinhvizg/ygo-card-api/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/vinhvizg1040/@vinhvizg/ygo-card-api/actions/workflows/npm-publish.yml)

A package that supports working with Yugioh card data.

## Table of Contents

- [Yugioh - Card - API](#yugioh---card---api)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Examples](#examples)
  - [Contributing](#contributing)
  - [License](#license)

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
const { Data, CardSearch } = require("ygo-card-api");

// Load data from JSON file
const dataFromJson = new Data("cards.json");
// Or from api
const dataFromAPI = new Data();
// save file with path
dataFromAPI.save("your_path.json");

// Fetches data asynchronously from 'dataFromAPI'
// and initializes a new CardSearch instance with the retrieved data.
// 'await' ensures that the data retrieval completes before assigning it to 'cards'.
const cards = new CardSearch(await dataFromAPI.getData());

// ========// SEARCH CARD //============//
// Sort the format of the cards (tcg, goat, ocg goat, speed duel, master duel, rush duel, duel links).
// Search Option: formats, name, fname, id, konami_id, type, atk, def, level, race, attribute,
// link, linkmarker, scale, cardsetm archetype, banlist, staple, has_effect, startdate, enddate, dateregion.
// misc: "yes" (if you want additional info).
// sort: search_option (if you want sort with name or atk,...)
// Then paginate
const page = 2;
const pageSize = 10;
const params = {
  formats: "Master Duel",
  name: "Dragon",
  atk: "1200",
  sort: "name",
  misc: "yes",
};
// using: cards.search(params); if you dont want paginate
const results = cards.search(params, page, pageSize);

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
