<p align="center"><h1 align="center">
  @ulisesgascon/data-structures
</h1>

<p align="center">
  Useful data structures for quick and easy implementation
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/data-structures"><img src="https://badgen.net/npm/v/@ulisesgascon/data-structures" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/data-structures"><img src="https://badgen.net/npm/license/@ulisesgascon/data-structures" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/data-structures"><img src="https://badgen.net/npm/dt/@ulisesgascon/data-structures" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>

# About

Useful data structures for quick and easy implementation. This library is a personal implementation from the classic computing data structures, based on the popular repository [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) and other sources.

## ❤️ Awesome Features:

- Simple and easy to use 🔥
- Typescript support 💪
- Zero dependencies 🚀
- Easy to use and great test coverage ✅

### Available structures

- Linked List

## Installation

```bash
npm install @ulisesgascon/data-structures
```

## Usage

### Linked List

![Explanation Diagram from ](https://raw.githubusercontent.com/trekhleb/javascript-algorithms/8fd8e752eaec9d6f986b344af3f548a64f283e1f/src/data-structures/linked-list/images/linked-list.jpeg)

_Image from [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)_

**Resources**
- [trekhleb/javascript-algorithms | Linked List](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
- [Wikipedia | Linked List](https://en.wikipedia.org/wiki/Linked_list)
- [Youtube | HackerRank - Data Structures: Linked Lists](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


**Importation**

```js
const { LinkedList } = require("@ulisesgascon/data-structures");
import { LinkedList } from "@ulisesgascon/data-structures";
```

**usage**

```js
const linkedList = new LinkedList("Hello World")
console.log(linkedList.length) // 1
console.log(linkedList.head.value) // Hello World
console.log(linkedList.head.next) // null
console.log(linkedList.tail.value) // Hello World
console.log(linkedList.tail.next) // null
linkedList.push("Second Item")
console.log(linkedList.head.next.value) // Second Item
console.log(linkedList.tail.value) // Second Item
const removedItem = linkedList.pop()
console.log(removedItem) // Second Item
console.log(linkedList.length) // 1
console.log(linkedList.head.value) // Hello World
console.log(linkedList.tail.value) // Hello World
const firstItem = linkedList.shift()
console.log(firstItem) // Hello World
console.log(linkedList.length) // 0
console.log(linkedList.head) // null
console.log(linkedList.tail) // null
linkedList.unshift("new Item")
console.log(linkedList.length) // 1
console.log(linkedList.head.value) // new Item
console.log(linkedList.tail.value) // new Item
linkedList.purge()
console.log(linkedList.length) // 0
console.log(linkedList.head) // null
console.log(linkedList.tail) // null
```

**Performance**

| Action | Array | Linked List | Details |
|--------|-------|-------------|---------|
| Initialization | **fastest** | 88.51% slower | [details](benchmark/results/initialization.chart.html) |
| Push | **fastest** | 1.98% slower | [details](benchmark/results/push.chart.html) |
| Pop | **fastest** | 48.38% slower | [details](benchmark/results/pop.chart.html) |
| Shift | 40.88% slower | **fastest** | [details](benchmark/results/shift.chart.html) |
| Unshift | 93.52% slower | **fastest** | [details](benchmark/results/unshift.chart.html) |
| Purge | 97.79% slower | **faster** | [details](benchmark/results/purge.chart.html) |




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
