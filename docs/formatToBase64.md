# `formatToBase64`

Add prefix to Base64

## Arguments

- `value: String`: A value to be base64

## Returns

- `string: String`: A string formatted with the base64 prefix

## Usage

```jsx
import { formatToBase64 } from '@platformbuilders/helpers'

formatToBase64('dGVzdA=='); // return 'data:image/png;base64,dGVzdA=='
```
