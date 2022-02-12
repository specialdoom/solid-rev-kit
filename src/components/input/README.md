# Input component

### Usage

```jsx
import { Input, Icons } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Input />
    <Input value="Value" />
    <Input placeholder="Placeholder" />
    <Input value="Disabled" disabled />
    <Input placeholder="With icon" icon={<Icons.Lens />} />
  </>
);
```

### API

| Property    | Description                                                           | Type               | Default   |
| ----------- | --------------------------------------------------------------------- | ------------------ | --------- |
| value       | Value of input component                                              | string             | undefined |
| placeholder | Placeholder of input component                                        | string             | undefined |
| disabled    | Whether the input component is disabled                               | boolean            | false     |
| icon        | Icon of input component. Decides whether the input component has icon | JSXElement         | undefined |
| onChange    | onChange event hanlder                                                | (e: Event) => void | undefined |
| onFocus     | onFocus event hanlder                                                 | (e: Event) => void | undefined |
| onInput     | onInput event hanlder                                                 | (e: Event) => void | undefined |
| onBlur      | onBlur event hanlder                                                  | (e: Event) => void | undefined |

# Textarea component

### Usage

```jsx
import { Input, Icons } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Input.TextArea />
    <Input.TextArea value="Value" />
    <Input.TextArea placeholder="Placeholder" />
    <Input.TextArea placeholder="Disabled" disabled />
    <Input.TextArea placeholder="Six rows textarea" rows={6} />
  </>
);
```

### API

| Property    | Description                                | Type               | Default   |
| ----------- | ------------------------------------------ | ------------------ | --------- |
| value       | Value of textarea component                | string             | undefined |
| placeholder | Placeholder of textarea component          | string             | undefined |
| disabled    | Whether the textarea component is disabled | boolean            | false     |
| rows        | Rows number of textarea component          | number             | 4         |
| onChange    | onChange event hanlder                     | (e: Event) => void | undefined |
| onFocus     | onFocus event hanlder                      | (e: Event) => void | undefined |
| onInput     | onInput event hanlder                      | (e: Event) => void | undefined |
| onBlur      | onBlur event hanlder                       | (e: Event) => void | undefined |
