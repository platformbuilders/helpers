# `formatToMonogram`

Removes all non-numeric characters from a string

## Arguments

- `value: String`: value to be format

## Returns

- `string: String`: A common string. If not exist number the return default is an empty

## Usage

```jsx
import { formatToMonogram } from '@platformbuilders/helpers';

formatToMonogram('John Doe'); // return 'JD'
formatToMonogram('John Doe Due'); // return 'JDD'
formatToMonogram('John'); // return 'J'
formatToMonogram(''); // return ''
```
