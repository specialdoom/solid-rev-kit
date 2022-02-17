import { createGlobalStyles } from 'solid-styled-components';
import { theme } from './theme';
import type { Colors } from './theme';

const generateTypes = () => {
	const tooltipTypes: (keyof Colors)[] = ['bright', 'dark', 'accent', 'error', 'warning', 'success'];

	let types = '';

	for (let type of tooltipTypes) {
		types += `
		.tippy-box[data-theme~=${type}] {
			background-color: ${theme.colors[type]};
		}
	
		.tippy-box[data-theme~=${type}][data-placement^='top'] > .tippy-arrow::before {
			border-top-color: ${theme.colors[type]};
		}
	
		.tippy-box[data-theme~=${type}][data-placement^='bottom'] > .tippy-arrow::before {
			border-bottom-color: ${theme.colors[type]};
		}
	
		.tippy-box[data-theme~=${type}][data-placement^='left'] > .tippy-arrow::before {
			border-left-color: ${theme.colors[type]};
		}
	
		.tippy-box[data-theme~=${type}][data-placement^='right'] > .tippy-arrow::before {
			border-right-color: ${theme.colors[type]};
		}
		`;
	}

	return types;
}

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

	.tippy-box {
		min-height: 32px;
		border-radius: 4px;
		font-size: 14px;
		height: fit-content;
		color: ${props => props.theme.colors.bright};
	}

	.tippy-box[data-theme~='bright'] {
		color: ${props => props.theme.colors.dark};
	}

	${generateTypes()}
`;