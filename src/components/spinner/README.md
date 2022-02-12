# Spinner component

### Usage

```jsx
import { Spinner } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Spinner type="accent" />
    <Spinner type="error" />
    <Spinner type="warning" />
    <Spinner type="success" />
  </>
);
```

### API

| Property | Description                                                                      | Type   | Default  |
| -------- | -------------------------------------------------------------------------------- | ------ | -------- |
| type     | Type of progress component. Options: 'accent' , 'warning' , 'success' or 'error' | string | 'accent' |
