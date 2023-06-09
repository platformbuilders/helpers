# `formatToPhone`

Format a string to phone format removing all non-numeric characters

## Arguments

- `value: String`: value to be format

## Returns

- `string: String`: A string with formatted phone number

## Usage

```jsx
import { formatToPhone } from '@platformbuilders/helpers'

formatToPhone('11999998888'); // return '(11) 99999-8888'
formatToPhone('11 999998888'); // return '(11) 99999-8888'
formatToPhone('11-999998888'); // return '(11) 99999-8888'
formatToPhone('11 99999-8888'); // return '(11) 99999-8888'
```
