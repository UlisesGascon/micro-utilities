<p align="center"><h1 align="center">
  @ulisesgascon/array-to-chunks
</h1>

<p align="center">
  A simple way to slice an array into chunks
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/array-to-chunks"><img src="https://badgen.net/npm/v/@ulisesgascon/array-to-chunks" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/array-to-chunks"><img src="https://badgen.net/npm/license/@ulisesgascon/array-to-chunks" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/array-to-chunks"><img src="https://badgen.net/npm/dt/@ulisesgascon/array-to-chunks" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>


# About

A simple way to slice an array into chunks

## ❤️ Awesome Features:


- Simple and easy to use 🔥
- Typescript support 💪
- Zero dependencies 🚀
- Easy to use and great test coverage ✅
- Throw an error for non-array elements 🥷


## Installation

```bash
npm install @ulisesgascon/array-to-chunks
```

## Usage

### Simple example

**Importation**

```js
const { chunkArray } = require('@ulisesgascon/array-to-chunks')
import { chunkArray } from '@ulisesgascon/array-to-chunks'
```

**usage**

```js
const array = [1,2,3,4,5,6,7,8,9]
console.log(chunkArray(chunkArray(array, 1)))   // [[1],[2],[3],[4],[5],[6],[7],[8],[9]]
console.log(chunkArray(chunkArray(array, 2)))   // [[1,2], [3,4], [5,6], [7,8], [9]]
console.log(chunkArray(chunkArray(array, 3)))   // [[1,2,3], [4,5,6], [7,8,9]]
console.log(chunkArray(chunkArray(array, 150))) // [[1,2,3,4,5,6,7,8,9]]
```

## Known limitations

This library is using slice to shadow copy the items from the original array.

> Elements of the original array are copied into the returned array as follows:
> For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.
> For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number or boolean in one array do not affect the other array. If a new element is added to either array, the other array is not affected.
> [Explanation about slice method from Naresh Kumar](https://stackoverflow.com/a/47738412)


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

- Extracted from [How to Split an Array into Even Chunks in JavaScript](https://stackabuse.com/how-to-split-an-array-into-even-chunks-in-javascript/) created by [Abhilash Kakumanu](https://github.com/abhilashkakumanu1)
- This project is under development, but you can help us to improve it! We :heart: FOSS!