# Counter component

### Usage

```jsx
import { Counter } from '@specialdoom/solid-rev-kit';

const CounterContainer = () => (
  <Counter defaultValue={6} minValue={-200} maxValue={200} disabled />
);
```

### API

| Property | Description                               | Type               | Default   |
| -------- | ----------------------------------------- | ------------------ | --------- |
| value    | Value of counter component                | number             | 0         |
| minValue | Minimum value of counter component        | number             | -999      |
| maxValue | Maximum value of counter component        | number             | 999       |
| disabled | Whether the counter component is disabled | boolean            | false     |
| onChange | onChange event hanlder                    | (e: Event) => void | undefined |
| onFocus  | onFocus event hanlder                     | (e: Event) => void | undefined |
| onInput  | onInput event hanlder                     | (e: Event) => void | undefined |
| onBlur   | onBlur event hanlder                      | (e: Event) => void | undefined |
