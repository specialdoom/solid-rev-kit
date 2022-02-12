# Button component

### Usage

```jsx
import { Button } from '@specialdoom/solid-rev-kit';

const Container = () => {
  const handleClick = () => console.log('button click');

  return (
    <>
      <Button>Accent button</Button>
      <Button variant="ghost">Ghost button</Button>
      <Button variant="bright">Bright button</Button>
      <hr />
      <Button disabled>Accent disabled button</Button>
      <Button variant="ghost" disabled>
        Ghost disabled button
      </Button>
      <Button variant="bright" disabled>
        Bright disabled button
      </Button>
      <hr />
      <Button small>Accent small button</Button>
      <Button variant="ghost" small>
        Ghost small button
      </Button>
      <Button variant="bright" small>
        Bright small button
      </Button>
      <hr />
      <Button small disabled>
        Accent disabled small button
      </Button>
      <Button variant="ghost" small disabled>
        Ghost disabled small button
      </Button>
      <Button variant="bright" small disabled>
        Bright disabled small button
      </Button>
      <hr />
    </>
  );
};
```

### API

| Property | Description                                            | Type               | Default   |
| -------- | ------------------------------------------------------ | ------------------ | --------- |
| variant  | Type of button. Options: 'bright', 'ghost' or 'accent' | string             | 'accent'  |
| small    | Whether the button is small                            | boolean            | false     |
| disabled | Whether the button is disabled                         | boolean            | false     |
| onClick  | onClick event handler                                  | (e: Event) => void | undefined |
