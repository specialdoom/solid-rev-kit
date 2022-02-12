# Progress component

### Usage

```jsx
import { Progress } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Progress type="accent" percent={20} />
    <Progress type="error" percent={80} />
    <Progress type="warning" percent={40} />
    <Progress type="success" percent={100} />
    <Progress loading />
  </>
);
```

### API

| Property | Description                                                                      | Type    | Default   |
| -------- | -------------------------------------------------------------------------------- | ------- | --------- |
| type     | Type of progress component. Options: 'accent' , 'warning' , 'success' or 'error' | string  | 'accent'  |
| percent  | Percent of progress component                                                    | number  | undefined |
| loading  | Thether the progress component is loading                                        | boolean | false     |
