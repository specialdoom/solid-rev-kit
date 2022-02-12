# Select component

https://img.shields.io/badge/skeleton-only-yellow

### Usage

```jsx
import { Select } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Select options={['Item 1', 'Item 2', 'Item 3']} />
    <Select
      options={['Item 1', 'Item 2', 'Item 3']}
      placeholder="Select placeholder"
    />
    <Select options={['Item 1', 'Item 2', 'Item 3']} defaultOption="Item 1" />
    <Select options={['Item 1', 'Item 2', 'Item 3']} disabled />
    <Select
      options={['Item 1', 'Item 2', 'Item 3']}
      placeholder="Select disabled placeholder"
      disabled
    />
    <Select
      options={['Item 1', 'Item 2', 'Item 3']}
      defaultOption="Item 1"
      disabled
    />
  </>
);
```

### API

| Property      | Description                                                    | Type     | Default   |
| ------------- | -------------------------------------------------------------- | -------- | --------- |
| options       | Options of select component                                    | string[] | []        |
| placeholder   | Placeholder of select component                                | string   | undefined |
| defaultOption | Default option of select component. Element from options array | string   | undefined |
| disabled      | Whether the select component is disabled                       | boolean  | false     |
