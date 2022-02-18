# Tooltip component

Using [tippy.js](https://atomiks.github.io/tippyjs/)

### Usage

```jsx
import { Tooltip } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Tooltip type="bright" title="Tooltip title" trigger="mouseenter click">
      <span>Hover to see tooltip</span>
    </Tooltip>
  </>
);
```

### API

| Property  | Description                                                                                                                                          | Type   | Default      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------ |
| title     | Title of tooltip component                                                                                                                           | string | ''           |
| type      | Type of tooltip component. Options: 'accent', 'error', 'warning', 'success', 'dark', 'bright'                                                        | string | 'dark'       |
| placement | Placement of tooltip component. Options: 'top', 'right', 'left', 'bottom' and 'auto'                                                                 | string | 'auto'       |
| Trigger   | Determines the events that cause the tippy tooltip to show. Multiple event names are separated by spaces. Options: mouseenter, focus, click, mousein | string | 'mouseenter' |
