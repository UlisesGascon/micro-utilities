# Micro Utilities

A bunch of small utilities that I reuse across projects

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

#### Published

- [normalize-boolean](/packages/normalize-boolean/README.md) - _Simple and very opinionated wrapper to manage Boolean conversions_
- [@ulisesgascon/is-different](/packages/is-different/README.md) - _A limited way to compare two values and return true if they are different_
- [@ulisesgascon/array-to-chunks](/packages/array-to-chunks/README.md) - _A simple way to slice an array into chunks_
- [@ulisesgascon/simplify-object](/packages/simplify-object/README.md) - _A simple way to return a new object with less properties_
- [@ulisesgascon/soft-assign-deep-property](/packages/soft-assign-deep-property/README.md) - _A simple way to assign a deep property to an object without overwriting any existing properties within it._
- [@ulisesgascon/text-tags-manager](/packages/text-tags-manager/README.md) - _Utils to manage text tags more easy to use, you know what I mean._

#### Internal
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all packages, run the following command:

```
cd micro-utilities
npm run build
```

### Lint

To lint all packages, run the following command:

```
cd micro-utilities
npm run dev
```

### Test

To test all packages, run the following command:

```
cd micro-utilities
npm run test
npm run test:coverage
npm run test:watch
```

### Benchmark

To benchmark all packages, run the following command:

```
cd micro-utilities
npm run benchmark
```



## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
