import { Component } from 'solid-js';
import { ThemeProvider } from 'solid-styled-components';
import { theme } from './theme';

export const RevkitTheme: Component = ({ children }) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
);