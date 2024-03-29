# Welcome to Platform Builders `Helpers`

[![Build Status][check-badge]][workflows]
[![codecov][codecov]](https://codecov.io/gh/platformbuilders/helpers)
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/helpers.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/helpers
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/helpers/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/helpers/actions
[check-badge]: https://github.com/platformbuilders/helpers/workflows/check/badge.svg
[codecov]: https://codecov.io/gh/platformbuilders/helpers/branch/master/graph/badge.svg

Welcome to the Platform Builder `helpers` package here you will find out all the helpers that we use on our projects

# Whats the idea of this repository

Its a place that we can share a little bit of our code base and show how we work on our projects with our helpers

# How can i use the library?

Just add the library to your project and import it!

1. Depend on it:

```
yarn add @platformbuilders/helpers

2. Import:

```

import { getTheme } from '@platformbuilders/helpers'
import { isIOS } from '@platformbuilders/helpers/native'

```

# Helpers Documentation

## React/JS

| Name                                               | Returns | Arguments                      |
| -------------------------------------------------- | ------- | ------------------------------ |
| [`formatToBase64`](./docs/formatToBase64.md)       | string  | (value)                        |
| [`currencyParser`](./docs/currencyParser.md)       | string  | (value, numberOfDecimalPlaces) |
| [`parseToThousands`](./docs/parseToThousands.md)   | string  | (value)                        |
| [`currencyToNumber`](./docs/currencyToNumber.md)   | string  | (value)                        |
| [`removeWhiteSpaces`](./docs/removeWhiteSpaces.md) | string  | (value)                        |
| [`toOnlyNumbers`](./docs/toOnlyNumbers.md)         | string  | (value)                        |
| [`formatToPhone`](./docs/formatToPhone.md)         | string  | (value)                        |

## React Native

| Name                                                | Returns | Arguments          |
| --------------------------------------------------- | ------- | ------------------ |
| [`isIOS`](./docs/native/isIOS.md)                   | boolean |                    |
```
