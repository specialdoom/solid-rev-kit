# Alert component

### Usage

```jsx
import { Avatar } from '@specialdoom/solid-rev-kit';

<Avatar initials="TI" round />;
```

### API

| Property | Description                 | Type    | Default   |
| -------- | --------------------------- | ------- | --------- |
| initials | Display initials            | string  | undefined |
| round    | Whether the avatar is round | boolean | false     |

### Default avatars

There are 4 named default avatars: Steven, Jake, Mili and Meg.

```jsx
import { Avatar } from '@specialdoom/solid-rev-kit';

<Avatar.Mili />
<Avatar.Jake />
<Avatar.Steven />
<Avatar.Meg />
```
