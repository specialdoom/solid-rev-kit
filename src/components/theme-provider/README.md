# ThemeProvider component

ThemeProvider wrapper component to access the styling of components and be able to include the global styles (includes typeface).

### Usage

```jsx
import { render } from 'solid-js/web';
import { RevKitTheme } from '@specialdoom/solid-rev-kit';

const App = () => <>app</>;

render(() => <RevKitTheme><App /></RevKitTheme>, document.getElementById('root') as HTMLElement);
```

### Types

```ts
type Colors = {
  accent: string;
  warning: string;
  success: string;
  error: string;
  primary: string;
  secondary: string;
  muted: string;
  bright: string;
  shade: string;
  tint: string;
  dark: string;
};
```
