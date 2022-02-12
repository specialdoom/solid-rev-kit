# Heading component

### Usage

```jsx
import { Typography } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <Typography.Heading size={1} type="primary">
    Heading x1
  </Typography.Heading>
);
```

### API

| Property | Description                                              | Type                                         | Default   |
| -------- | -------------------------------------------------------- | -------------------------------------------- | --------- |
| size     | Size of heading component. Options: 1, 2, 3, 4, 5 or 6.  | number                                       | 1         |
| wight    | Weight of heading component: Options: 'normal' or 'bold' | string                                       | 'normal'  |
| type     | Type of heading component                                | keyof [Colors](https://tinyurl.com/2p97bv3t) | 'primary' |

# Paragraph component

### Usage

```jsx
import { Typography } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Typography.Paragraph type="primary">Paragraph x1</Paragraph>
    <Typography.Paragraph size={2} type="primary">
      Paragraph x2
    </Typography.Paragraph>
  </>
);
```

### API

| Property | Description                                                | Type                                         | Default   |
| -------- | ---------------------------------------------------------- | -------------------------------------------- | --------- |
| size     | Size of paragraph component. Options: 1 or 2.              | number                                       | 1         |
| wight    | Weight of paragraph component: Options: 'normal' or 'bold' | string                                       | 'normal'  |
| type     | Type of paragraph component                                | keyof [Colors](https://tinyurl.com/2p97bv3t) | 'primary' |

# Label component

### Usage

```jsx
import { Typography } from '@specialdoom/solid-rev-kit';

const Container = () => (
    <Typography.Label type="primary">Label</Label>
);
```

### API

| Property | Description             | Type                                         | Default   |
| -------- | ----------------------- | -------------------------------------------- | --------- |
| type     | Type of label component | keyof [Colors](https://tinyurl.com/2p97bv3t) | 'primary' |
