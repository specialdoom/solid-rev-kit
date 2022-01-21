import { ThemeProvider } from 'solid-styled-components';
import { theme } from './theme';

export const RevKitTheme = (props: { children: any; }) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;