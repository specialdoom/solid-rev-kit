# Callout component

### Usage

```jsx
import { Callout } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Callout
      title="Callout Title"
      text="Supportive text for the callout goes here like a pro, which informs and helps users decide what they should do next."
      actions={[
        <Button small>Action</Button>,
        <Button variant="ghost" small>
          Action
        </Button>
      ]}
    />
    <Callout
      text="Supportive text for the callout."
      actions={[
        <Button small>Action</Button>,
        <Button variant="ghost" small>
          Action
        </Button>
      ]}
      small
    />
  </>
);
```

### API

| Property    | Description                            | Type         | Default   |
| ----------- | -------------------------------------- | ------------ | --------- |
| title       | Title of callout component             | string       | undefined |
| description | Description of callout component       | string       | undefined |
| small       | Whether the callout is small           | boolean      | false     |
| actions     | Array of actions for callout component | JSXElement[] | undefined |
