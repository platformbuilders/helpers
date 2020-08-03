# `switchStyle`

---

## Arguments

- `value: String`: Value to be find
- `stylesObj: Object`: An object
- `props: Object`: An object

## Returns

- `string: String`: Value of stylesObj when the key is a value of props

## Usage

```jsx
import { switchStyle } from '@platformbuilders/helpers'

const props = { color: 'black' };
const stylesObj = { black: '#000', white: '#FFF' };

switchStyle('color')(stylesObj)(props); // return '#000'
```
