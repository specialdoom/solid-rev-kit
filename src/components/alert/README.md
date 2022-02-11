# Alert component

### Usage

```jsx
import { Alert } from '@specialdoom/solid-rev-kit';

<Alert type="bright" color="accent">
  A bright alert flash for dark backgrounds, which never lose the contrast.
</Alert>;
```

### API

| Property | Description                                                                       | Type                                                                                                          | Default  |
| -------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| type     | Type of alert. Options: 'accent', 'error', 'warning', 'success', 'dark', 'bright' | string                                                                                                        | 'accent' |
| color    | Text and icon color                                                               | keyof [Colors](https://github.com/specialdoom/solid-rev-kit/tree/main/src/components/themeProvider/README.md) | 'bright' |
