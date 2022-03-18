# Chat Bubble component

### Usage

```jsx
import { ChatBubble } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <ChatBubble>Chat message</ChatBubble>
  </>
```

### API

| Property  | Description                                                                                        | Type   | Default     |
| --------- | -------------------------------------------------------------------------------------------------- | ------ | ----------- |
| type      | Type of chat bubble component. Options: 'bright', 'dark', 'strawberry' and 'blueberry'.            | string | 'blueberry' |
| placement | Placement of chat bubble arrow. Options: 'top-right', 'top-left', 'bottom-left' and 'bottom-right' | string | 'top-left'  |
