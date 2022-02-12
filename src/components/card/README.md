# Generic Card component

### Usage

```jsx
import { Card } from '@specialdoom/solid-rev-kit';

const CardContainer = () => (
  <Card.Generic
    imageSrc="image_source"
    title="Card title"
    actions={[<Button variant="ghost">Action</Button>]}
  >
    Supporting description for the card goes here like a breeze.
  </Card.Generic>
);
```

### API

| Property | Description                                           | Type         | Default   |
| -------- | ----------------------------------------------------- | ------------ | --------- |
| title    | Title of card component                               | string       | undefined |
| imageSrc | Src of card image. Defines whether the card has image | string       | undefined |
| actions  | Array of actions for callout component                | JSXElement[] | undefined |

# Fill Card component

### Usage

```jsx
import { Card } from '@specialdoom/solid-rev-kit';

const ColorCardContainer = () => (
  <>
    <Card.Fill background="#0880AE" label="Label" title="Card title" small>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Card.Fill>
    <Card.Fill
      background="image_source_url"
      label="Label"
      title="Card title"
      small
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Card.Fill>
  </>
);
```

### API

| Property   | Description                    | Type    | Default   |
| ---------- | ------------------------------ | ------- | --------- |
| background | Color or url for background    | string  | #2C2738   |
| color      | Text and icon color            | string  | #FFFFFF   |
| label      | Label of color card component  | string  | undefined |
| title      | Title of color card component  | string  | undefined |
| small      | Whether the component is small | boolean | false     |
