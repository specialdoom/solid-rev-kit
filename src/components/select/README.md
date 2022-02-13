# Select component

### Usage

```jsx
import { Select } from '@specialdoom/solid-rev-kit';

const Container = () => {
  const selectOptions = [
    {
      label: '🥭 Mango',
      value: 'Mango'
    },
    {
      label: '🍊 Orange',
      value: 'Orange'
    },
    {
      label: '🍎 Apple',
      value: 'Apple',
      disabled: true
    }
  ];

  return (
    <>
      <Select options={selectOptions} />
      <Select options={selectOptions} placeholder="Select placeholder" />
      <Select options={selectOptions} defaultOption="Mango" />
      <Select options={selectOptions} disabled />
      <Select
        options={selectOptions}
        placeholder="Select disabled placeholder"
        disabled
      />
      <Select options={selectOptions} defaultOption="Mango" disabled />
    </>
  );
};
```

### API

| Property      | Description                                                    | Type                                           | Default   |
| ------------- | -------------------------------------------------------------- | ---------------------------------------------- | --------- |
| options       | Options of select component                                    | [SelectOption](https://tinyurl.com/3vmvxxsh)[] | []        |
| placeholder   | Placeholder of select component                                | string                                         | undefined |
| defaultOption | Default option of select component. Element from options array | string                                         | undefined |
| disabled      | Whether the select component is disabled                       | boolean                                        | false     |
| onSelect      | Select option event handler                                    | (value: string) => void                        | undefined |
| onChange      | Change option event handler                                    | (value: string) => void                        | undefined |
| onBlur        | Blur event handler                                             | (value: string) => void                        | undefined |
