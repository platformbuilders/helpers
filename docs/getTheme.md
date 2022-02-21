# `getTheme`

Get a value by object representing the theme

## Arguments

- `value: String | (theme) => String | Number`: Value to be find
- `theme: String`: An object with

## Returns

- `value: String | Number`: A string or number representing the object id.

## Usage

```jsx
import { getTheme } from '@platformbuilders/helpers';

const theme = {
  black: '#000',
  white: '#FFF',
};

getTheme('black')({ theme }); // return '#000'
getTheme((theme) => theme.white)({ theme }); // return '#FFF'
```
