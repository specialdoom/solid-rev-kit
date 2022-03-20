import { ThemeProvider } from 'solid-styled-components';
import { GlobalStyle } from './global-style';
import { theme } from './theme';

export const RevKitTheme = (props: any) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{props.children}
	</ThemeProvider>
);
