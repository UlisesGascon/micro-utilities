<p align="center"><h1 align="center">
  @ulisesgascon/soft-assign-deep-property
</h1>

<p align="center">
  A simple way to assign a deep property to an object without overwriting any existing properties within it.
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/soft-assign-deep-property"><img src="https://badgen.net/npm/v/@ulisesgascon/soft-assign-deep-property" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/soft-assign-deep-property"><img src="https://badgen.net/npm/license/@ulisesgascon/soft-assign-deep-property" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/soft-assign-deep-property"><img src="https://badgen.net/npm/dt/@ulisesgascon/soft-assign-deep-property" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>

# About

A simple way to assign a deep property to an object without overwriting any existing properties within it

## ❤️ Awesome Features:

- Simple and easy to use 🔥
- Typescript support 💪
- Zero dependencies 🚀
- Easy to use and great test coverage ✅

## Installation

```bash
npm install @ulisesgascon/soft-assign-deep-property
```

## Usage

### Simple example

**Importation**

```js
const { softAssign } = require("@ulisesgascon/soft-assign-deep-property");
import { softAssign } from "@ulisesgascon/soft-assign-deep-property";
```

**Usage**

```js
const data = {
  I: {
    will: {
      say: "Hello World!",
    },
  },
};

// ✅ Just add deep properties
softAssign(data, ["you", "will", "say"], "This is cool!");
console.log(data.you.will.say); // This is cool!

// ❌ Avoid to modify existing properties
softAssign(data[("I", "will", "say")], "New Value!");
console.log(data.I.will.say); // Hello World!
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

- Based on a [Stack Overflow snippet](https://stackoverflow.com/a/5484764) made by [Kennytm](https://stackoverflow.com/users/224671/kennytm)
- This project is under development, but you can help us to improve it! We :heart: FOSS!
