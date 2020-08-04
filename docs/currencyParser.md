# `currencyParser`

Is a currency format utility.

## Arguments

- `value: String | Number`: A value to be format. Positive or negative.
- `numberOfDecimalPlaces?: Number`: A positive number. If is negative number value default is __2__. Optional

## Returns

- `string: String`: A formatted string that has values ​​with separators, spacing, etc. Prefix __R$__

## Usage

```jsx
import { currencyParser } from '@platformbuilders/helpers'

currencyParser('10'); // return R$ 10,00

currencyParser(100, 0); // return R$ 100
```
