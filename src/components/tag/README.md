# Tag component

### Usage

```jsx
import { Tag } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Tag type="bright" color="accent">
      Bright tag
    </Tag>
    <Tag type="dark">Dark tag</Tag>
    <Tag type="success">Success tag</Tag>
    <Tag type="warning">Warning tag</Tag>
    <Tag type="error">Error tag</Tag>
    <Tag type="accent">Accent tag</Tag>
  </>
);
```

### API

| Property | Description                                                                               | Type                                         | Default  |
| -------- | ----------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| type     | Type of tag component. Options: 'accent', 'error', 'warning', 'success', 'dark', 'bright' | string                                       | 'accent' |
| color    | Text color                                                                                | keyof [Colors](https://tinyurl.com/2p97bv3t) | 'bright' |
| closable | Whether the tag component can be closed                                                   | boolean                                      | false    |
