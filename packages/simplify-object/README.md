<p align="center"><h1 align="center">
  @ulisesgascon/simplify-object
</h1>

<p align="center">
  A simple way to return a new object with less properties
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/simplify-object"><img src="https://badgen.net/npm/v/@ulisesgascon/simplify-object" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/simplify-object"><img src="https://badgen.net/npm/license/@ulisesgascon/simplify-object" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/simplify-object"><img src="https://badgen.net/npm/dt/@ulisesgascon/simplify-object" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>

# About

A simple way to return a new object with less properties

## ❤️ Awesome Features:

- Simple and easy to use 🔥
- Typescript support 💪
- Zero dependencies 🚀
- Easy to use and great test coverage ✅

## Installation

```bash
npm install @ulisesgascon/simplify-object
```

## Usage

### Simple example

**Importation**

```js
const { simplifyObject } = require("@ulisesgascon/simplify-object");
import { simplifyObject } from "@ulisesgascon/simplify-object";
```

**Usage**

```js
const user = {
  name: "Jane",
  nickname: "JaneDoe",
  isAdmin: true,
  age: 120,
  bio: "Hacker life",
};
// Just create a copy with less stuff
const simpleUser = simplifyObject(user, {
  exclude: ["name", "bio", "age"],
});
console.log(simpleUser);

// Just create a copy with specific things
const simpleUser2 = simplifyObject(user, {
  include: ["name", "bio", "age"],
});
console.log(simpleUser2); //  {name: "Jane",bio: "Hacker life", age: 120 }
```

## Known limitations

The new Object has been created by using the [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) estrategy

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
