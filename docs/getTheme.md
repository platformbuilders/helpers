# `getTheme`

Get a value by object representing the theme

## Arguments

- `value: String`: Value to be find
- `theme: String`: An object with

## Returns

- `string: String`: A string representing the object id.

## Usage

```jsx
import { getTheme } from '@platformbuilders/helpers'

const theme = {
  black: '#000',
  white: '#FFF',
};

getTheme('black')({theme}); // return '#000'
```
