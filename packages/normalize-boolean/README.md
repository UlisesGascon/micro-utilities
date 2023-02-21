<p align="center"><h1 align="center">
  @ulisesgascon/normalize-boolean
</h1>

<p align="center">
  Opinionated boolean conversion
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/normalize-boolean"><img src="https://badgen.net/npm/v/@ulisesgascon/normalize-boolean" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/normalize-boolean"><img src="https://badgen.net/npm/license/@ulisesgascon/normalize-boolean" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/normalize-boolean"><img src="https://badgen.net/npm/dt/@ulisesgascon/normalize-boolean" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>


# About

Simple and very opinionated wrapper to manage Boolean conversions

## ❤️ Awesome Features:


- Simple and easy to use 🔥
- Typescript support 💪
- Zero dependencies 🚀
- Easy to use and great test coverage ✅


## Installation

```bash
npm install @ulisesgascon/normalize-boolean
```

## Usage

### Simple example

**Importation**

```js
const { normalizeBoolean } = require('@ulisesgascon/normalize-boolean')
import { normalizeBoolean } from '@ulisesgascon/normalize-boolean'
```

**usage**

```js

// True and false alias
console.log(normalizeBoolean('true'))  // true
console.log(normalizeBoolean('on'))    // true
console.log(normalizeBoolean('yes'))   // true
console.log(normalizeBoolean('y'))     // true
console.log(normalizeBoolean('false')) // false
console.log(normalizeBoolean('off'))   // false
console.log(normalizeBoolean('no'))    // false
console.log(normalizeBoolean('n'))     // false

// Numbers as string
console.log(normalizeBoolean('1'))    // true
console.log(normalizeBoolean('1.0'))  // true
console.log(normalizeBoolean('1,0'))  // true
console.log(normalizeBoolean('0'))    // false
console.log(normalizeBoolean('0.0'))  // false
console.log(normalizeBoolean('0,0'))  // false

// Numbers
console.log(normalizeBoolean(1))    // true
console.log(normalizeBoolean(-1))   // false
console.log(normalizeBoolean(0))    // false
console.log(normalizeBoolean(-123)) // false
console.log(normalizeBoolean(123))  // false

// Non-trimmed or capitalized
console.log(normalizeBoolean('  OFF')) // false
console.log(normalizeBoolean(' ON  ')) // true

// Non-primary types
console.log(normalizeBoolean(()=>{})) // false
console.log(normalizeBoolean({ "hello": "world"})) // false 
console.log(normalizeBoolean([1,2,3])) // false

// Classic Non-values
console.log(normalizeBoolean(null)) // false
console.log(normalizeBoolean(undefined)) // false
console.log(normalizeBoolean("")) // false
console.log(normalizeBoolean(NaN)) // false
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