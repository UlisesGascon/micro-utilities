<p align="center"><h1 align="center">
  @ulisesgascon/string-to-array
</h1>

<p align="center">
  A simple and opinionated way to convert a string to an array
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/string-to-array"><img src="https://badgen.net/npm/v/@ulisesgascon/string-to-array" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/string-to-array"><img src="https://badgen.net/npm/license/@ulisesgascon/string-to-array" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/string-to-array"><img src="https://badgen.net/npm/dt/@ulisesgascon/string-to-array" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>

# About

A simple and opinionated way to convert a string to an array

## ❤️ Awesome Features:

- Simple and easy to use 🔥
- Typescript support 💪
- Zero dependencies 🚀
- Easy to use and great test coverage ✅

## Installation

```bash
npm install @ulisesgascon/string-to-array
```

## Usage

### Simple example

**Importation**

```js
const { stringToArray } = require("@ulisesgascon/string-to-array");
import { stringToArray } from "@ulisesgascon/string-to-array";
```

**usage**

```js
const string = "hello,world";
console.log(stringToArray(string)); // ['hello', 'world']

// Use custom separator
const string = "hello+world";
console.log(stringToArray(string, "+")); // ['hello', 'world']

// Remove empty values
const people = "John, Lisa, , , James";
console.log(stringToArray(people)); // ['John', 'Lisa', 'James']

// Ignore blank spaces
const people = "   John, Lisa ,  James  ";
console.log(stringToArray(people)); // ['John', 'Lisa', 'James']

// Always return an array
const people = "";
console.log(stringToArray(people)); // []
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
