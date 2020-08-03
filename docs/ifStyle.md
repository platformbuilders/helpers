# `ifStyle`

Verify that the style is present

(prop)(truthy, falsy)(style) 

## Arguments

- `prop: String`: value to be find
- `(truthy, falsy)`: truthy a value if prop exist in style. falsy: a value if prop no exist in style
- `style`: an object

## Returns

- `string: String`: Result of verification. 

## Usage

```jsx
import { ifStyle } from '@platformbuilders/helpers'

const truthy = 'color: red';
const falsy = 'color: black';

const style = {
  error: true,
};

// When object exist the return value of truthy
ifStyle('error')(truthy, falsy)(style); // return 'color: red'

// When object no exist or false the return value of falsy
ifStyle('border')(truthy, falsy)(style); // return 'color: black'
```
