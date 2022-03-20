import { createGlobalStyles } from 'solid-styled-components';
import { TooltipStyle } from '../tooltip/TooltipStyle';

export const GlobalStyle = createGlobalStyles`
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans');

	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	* {
		font-family: 'IBM Plex Sans', sans-serif;
	}

	body {
		background-color: #ebf4f8;
	}

	${TooltipStyle}	
`;
