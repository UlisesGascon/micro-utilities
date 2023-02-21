<p align="center"><h1 align="center">
  @ulisesgascon/text-tags-manager
</h1>

<p align="center">
  Utils to manage text tags more easy to use, you know what I mean.
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ulisesgascon/text-tags-manager"><img src="https://badgen.net/npm/v/@ulisesgascon/text-tags-manager" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/text-tags-manager"><img src="https://badgen.net/npm/license/@ulisesgascon/text-tags-manager" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@ulisesgascon/text-tags-manager"><img src="https://badgen.net/npm/dt/@ulisesgascon/text-tags-manager" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/micro-utilities"><img src="https://snyk.io/test/github/ulisesgascon/micro-utilities/badge.svg" alt="Known Vulnerabilities"/></a>
</p>


# About

Utils to manage text tags more easy to use, you know what I mean

## ❤️ Awesome Features:


- Simple and easy to use 🔥
- Typescript support 💪
- Zero dependencies 🚀
- Easy to use and great test coverage ✅


## Installation

```bash
npm install @ulisesgascon/text-tags-manager
```

## Usage

### Simple example

**Importation**

```js
const { updateOrCreateSegment } = require('@ulisesgascon/text-tags-manager')
import { updateOrCreateSegment } from '@ulisesgascon/text-tags-manager'
```

**Replace content**

Original state:

`sample_file.md`
```
This text should remind the same...

<!-- MY-TAG:START -->
The old text
<!-- MY-TAG:END -->

This text will be also unaffected
```

Transformation: 

```js
const { readFile, writeFile } = require('fs').promises

const replacementSegment = 'This is my new text, you know... the same but more cool!'
const startTag = '<!-- MY-TAG:START -->'
const endTag = '<!-- MY-TAG:END -->'

// Update
const originalText = await readFile('./sample_file.md')

const updatedContent = updateOrCreateSegment({ 
  original: originalText, 
  replacementSegment,
  startTag,
  endTag,
})

await writeFile('./sample_file.md', updatedContent)

// Create
const newContent = updateOrCreateSegment({ 
  original: '',  // Simulate empty content with an empty string
  replacementSegment,
  startTag,
  endTag,
})

await writeFile('./new_file.md', newContent)
```

Output:

`new_file.md`
```
<!-- MY-TAG:START -->
This is my new text, you know... the same but more cool!
<!-- MY-TAG:END -->
```

`sample_file.md`
```
This text should remind the same...

<!-- MY-TAG:START -->
This is my new text, you know... the same but more cool!
<!-- MY-TAG:END -->

This text will be also unaffected
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