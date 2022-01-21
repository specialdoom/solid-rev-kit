import { ThemeProvider } from 'solid-styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

export const RevKitTheme = (props: { children: any; }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{props.children}
	</ThemeProvider>
);