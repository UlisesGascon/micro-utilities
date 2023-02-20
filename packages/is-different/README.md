<p align="center"><h1 align="center">
  is-different
</h1>

<p align="center">
  A limited way to compare two values and return true if they are different
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/is-different"><img src="https://badgen.net/npm/v/is-different" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/is-different"><img src="https://badgen.net/npm/license/is-different" alt="license"/></a>
  <a href="https://www.npmjs.org/package/is-different"><img src="https://badgen.net/npm/dt/is-different" alt="downloads"/></a>
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
npm install is-different
```

## Usage

### Simple example

**Importation**

```js
const { isDifferent } = require('is-different')
import { isDifferent } from 'is-different'
```

**usage**

```js
console.log(isDifferent([1,2,3], [1,2]))   // true
console.log(isDifferent('on', 'off'))      // true
console.log(isDifferent(true, false))      // true
console.log(isDifferent({'a':1}, {'a':2})) // true
console.log(isDifferent(1, 2))             // true 

console.log(isDifferent([1,2], [1,2]))     // true
console.log(isDifferent('on', 'on'))       // true
console.log(isDifferent(true, true))       // true
console.log(isDifferent({'a':1}, {'a':1})) // true
console.log(isDifferent(1, 1))             // true 
```

## Known limitations

This library is doing a transformation to JSON and comparing both strings, this will ignore non-valid JSON values like functions.

- BigInt type is not supported
- Functions type is not supported due JSON definition

```js
isDifferentContent ({a: ()=>{return true}},{a: ()=>{return false}}) // false
isDifferent(() => {return true},()=>{return true}) //false
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