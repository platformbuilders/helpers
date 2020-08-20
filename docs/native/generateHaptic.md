# `generateHaptic`

Generates haptic hardware feedback. Argument defaults to `impact`;

## Arguments

`type HapticFeedbackType = 'impact' | 'notification' | 'selection' | 'impactLight' | 'impactMedium' | 'impactHeavy' | 'notificationError' | 'notificationSuccess' | 'notificationWarning';`

## Usage

```jsx
import { generateHaptic } from '@platformbuilders/helpers/native';

generateHaptic('selection');
```
