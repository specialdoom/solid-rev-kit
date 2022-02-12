# Alert component

### Usage

```jsx
import { Alert } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Alert type="bright" color="accent">
      A bright alert flash for dark backgrounds, which never lose the contrast.
    </Alert>
    <Alert type="dark">
      A dark (primary type) alert flash for bright backgrounds, which never lose
      the contrast.
    </Alert>
    <Alert type="success">
      A success alert flash, which never lose the contrast.
    </Alert>
    <Alert type="warning">A warning alert flash that never sucks.</Alert>
    <Alert type="error">An error alert flash that nobody loves.</Alert>
    <Alert type="accent">An accent alert flash that looks pretty nice.</Alert>
  </>
);
```

### API

| Property | Description                                                                       | Type                                         | Default  |
| -------- | --------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| type     | Type of alert. Options: 'accent', 'error', 'warning', 'success', 'dark', 'bright' | string                                       | 'accent' |
| color    | Text and icon color                                                               | keyof [Colors](https://tinyurl.com/2p97bv3t) | 'bright' |
