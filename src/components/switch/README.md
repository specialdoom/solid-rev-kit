# Switch component

### Usage

```jsx
import { Switch } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Switch />
    <Switch checked />
    <Switch disabled />
    <Switch checked disabled />
  </>
);
```

### API

| Property | Description                              | Type               | Default   |
| -------- | ---------------------------------------- | ------------------ | --------- |
| checked  | Whether the switch component is checked  | boolean            | false     |
| disabled | Whether the switch component is disabled | boolean            | false     |
| onChange | onChange event hanlder                   | (e: Event) => void | undefined |
| onFocus  | onFocus event hanlder                    | (e: Event) => void | undefined |
| onInput  | onInput event hanlder                    | (e: Event) => void | undefined |
| onBlur   | onBlur event hanlder                     | (e: Event) => void | undefined |
