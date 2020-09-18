# `pxToRem`

Convert `px` metric to `rem`, using an optional baseline as argument.

## Arguments

- `pixel: number`: value to be converted
- `base?: number`: optional baseline, normally 16

## Returns

- `rem: string`: The result between the pixel and base calculation

## Usage

```jsx
import { pxToRem } from '@platformbuilders/helpers';

pxToRem(20); // return '1.25rem'

pxToRem(20, 20); // return '1rem'
```
