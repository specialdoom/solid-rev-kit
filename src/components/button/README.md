# Button component

### Usage

```jsx
import { Button } from '@specialdoom/solid-rev-kit';

const handleClick = () => console.log('button click');

<Button variant="bright" onClick={handleClick} disabled small>
  Rev Kit Button
</Button>;
```

### API

| Property | Description                                            | Type               | Default   |
| -------- | ------------------------------------------------------ | ------------------ | --------- |
| variant  | Type of button. Options: 'bright', 'ghost' or 'accent' | string             | 'accent'  |
| small    | Whether the button is small                            | boolean            | false     |
| disabled | Whether the button is disabled                         | boolean            | false     |
| onClick  | onClick event handler                                  | (e: Event) => void | undefined |
