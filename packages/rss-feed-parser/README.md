<p align="center"><h1 align="center">
  @ulisesgascon/rss-feed-parser
</h1>

<p align="center">
  A simple and easy to use RSS feed parser
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/rss-feed-parser"><img src="https://badgen.net/npm/v/@ulisesgascon/rss-feed-parser" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/rss-feed-parser"><img src="https://badgen.net/npm/license/@ulisesgascon/rss-feed-parser" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/rss-feed-parser"><img src="https://badgen.net/npm/dt/@ulisesgascon/rss-feed-parser" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>

# About

Simple and very opinionated RSS feed parser

## ❤️ Awesome Features:

- Simple and easy to use 🔥
- Typescript support 💪
- Using `fast-xml-parser` under the hood 🚀
- Easy to use and great test coverage ✅

## Installation

```bash
npm install @ulisesgascon/rss-feed-parser
```

## Usage

### Simple example

**Importation**

```js
const { rssParse } = require("@ulisesgascon/rss-feed-parser");
import { rssParse } from "@ulisesgascon/rss-feed-parser";
```

**usage**

```js
const rssFeed = rssParse(fileContent);
console.log(rssFeed.metadata); // Feed metadata
console.log(rssFeed.metadata.channel.title);
console.log(rssFeed.metadata.image.url);
console.log(rssFeed.items[0]);
console.log(rssFeed.items[0].title);
console.log(rssFeed.items[0].link);
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/UlisesGascon/.github/blob/main/contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ulisesGascon/micro-utilities/tags).

## Authors

- **Ulises Gascón** - Initial work- - [@ulisesGascon](https://github.com/ulisesGascon)

See also the list of [contributors](https://github.com/ulisesGascon/micro-utilities/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](../../LICENSE.md) file for details

## Acknowledgments

- This project is under development, but you can help us to improve it! We :heart: FOSS!
