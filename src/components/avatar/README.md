# Avatar component

### Usage

```jsx
import { Avatar } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Avatar initials='RK' />
    <Avatar initials='RK' round />
  </>
```

### API

| Property | Description                 | Type    | Default   |
| -------- | --------------------------- | ------- | --------- |
| initials | Display initials            | string  | undefined |
| round    | Whether the avatar is round | boolean | false     |

# Default avatars

There are 4 named default avatars: Steven, Jake, Mili and Meg.

```jsx
import { Avatar } from '@specialdoom/solid-rev-kit';

const Container = () => (
  <>
    <Avatar.Meg />
    <Avatar.Meg round />
    <Avatar.Mike />
    <Avatar.Mike round />
    <Avatar.Steven />
    <Avatar.Steven round />
    <Avatar.Mili />
    <Avatar.Mili round />
  </>
);
```

### API

| Property | Description                 | Type    | Default |
| -------- | --------------------------- | ------- | ------- |
| round    | Whether the avatar is round | boolean | false   |
