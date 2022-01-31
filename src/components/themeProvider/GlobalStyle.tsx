import { createGlobalStyles } from 'solid-styled-components';

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

	.tippy-box[data-animation=fade][data-state=hidden] {
		opacity: 0
	}

	[data-tippy-root] {
		max-width: calc(100vw - 10px)
	}

	.tippy-box {
		position: relative;
		background-color: #333;
		color: #fff;
		border-radius: 4px;
		font-size: 14px;
		line-height: 1.4;
		white-space: normal;
		outline: 0;
		transition-property: transform, visibility, opacity
	}

	.tippy-box[data-placement^=top]>.tippy-arrow {
		bottom: 0
	}

	.tippy-box[data-placement^=top]>.tippy-arrow:before {
		bottom: -7px;
		left: 0;
		border-width: 8px 8px 0;
		border-top-color: initial;
		transform-origin: center top
	}

	.tippy-box[data-placement^=bottom]>.tippy-arrow {
		top: 0
	}

	.tippy-box[data-placement^=bottom]>.tippy-arrow:before {
		top: -7px;
		left: 0;
		border-width: 0 8px 8px;
		border-bottom-color: initial;
		transform-origin: center bottom
	}

	.tippy-box[data-placement^=left]>.tippy-arrow {
		right: 0
	}

	.tippy-box[data-placement^=left]>.tippy-arrow:before {
		border-width: 8px 0 8px 8px;
		border-left-color: initial;
		right: -7px;
		transform-origin: center left
	}

	.tippy-box[data-placement^=right]>.tippy-arrow {
		left: 0
	}

	.tippy-box[data-placement^=right]>.tippy-arrow:before {
		left: -7px;
		border-width: 8px 8px 8px 0;
		border-right-color: initial;
		transform-origin: center right
	}

	.tippy-box[data-inertia][data-state=visible] {
		transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)
	}

	.tippy-arrow {
		width: 16px;
		height: 16px;
		color: #333
	}

	.tippy-arrow:before {
		content: "";
		position: absolute;
		border-color: transparent;
		border-style: solid
	}

	.tippy-content {
		position: relative;
		padding: 5px 9px;
		z-index: 1
	}

	.tippy-box[data-theme~='accent'] {
		background-color: ${(props: any) => props.theme.colors.accent};
		color: ${(props: any) => props.theme.colors.bright};
		padding: 7px 10px;
		border-radius: 4px;
	}

	.tippy-box[data-theme~='accent'][data-placement^='top'] > .tippy-arrow::before {
  	border-top-color: ${(props: any) => props.theme.colors.accent};
	}

	.tippy-box[data-theme~='accent'][data-placement^='bottom'] > .tippy-arrow::before {
		border-bottom-color: ${(props: any) => props.theme.colors.accent};
	}

	.tippy-box[data-theme~='accent'][data-placement^='left'] > .tippy-arrow::before {
		border-left-color: ${(props: any) => props.theme.colors.accent};
	}

	.tippy-box[data-theme~='accent'][data-placement^='right'] > .tippy-arrow::before {
		border-right-color: ${(props: any) => props.theme.colors.accent};
	}

	.tippy-box[data-theme~='primary'] {
		background-color: ${(props: any) => props.theme.colors.primary};
		color: ${(props: any) => props.theme.colors.bright};
		padding: 7px 10px;
		border-radius: 4px;
	}

	.tippy-box[data-theme~='primary'][data-placement^='top'] > .tippy-arrow::before {
  	border-top-color: ${(props: any) => props.theme.colors.primary};
	}

	.tippy-box[data-theme~='primary'][data-placement^='bottom'] > .tippy-arrow::before {
		border-bottom-color: ${(props: any) => props.theme.colors.primary};
	}

	.tippy-box[data-theme~='primary'][data-placement^='left'] > .tippy-arrow::before {
		border-left-color: ${(props: any) => props.theme.colors.primary};
	}

	.tippy-box[data-theme~='primary'][data-placement^='right'] > .tippy-arrow::before {
		border-right-color: ${(props: any) => props.theme.colors.primary};
	}

	.tippy-box[data-theme~='bright'] {
		background-color: ${(props: any) => props.theme.colors.bright};
		color: ${(props: any) => props.theme.colors.primary};
		padding: 7px 10px;
		border-radius: 4px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}

	.tippy-box[data-theme~='bright'][data-placement^='top'] > .tippy-arrow::before {
  	border-top-color: ${(props: any) => props.theme.colors.bright};
	}

	.tippy-box[data-theme~='bright'][data-placement^='bottom'] > .tippy-arrow::before {
		border-bottom-color: ${(props: any) => props.theme.colors.bright};
	}

	.tippy-box[data-theme~='bright'][data-placement^='left'] > .tippy-arrow::before {
		border-left-color: ${(props: any) => props.theme.colors.bright};
	}

	.tippy-box[data-theme~='bright'][data-placement^='right'] > .tippy-arrow::before {
		border-right-color: ${(props: any) => props.theme.colors.bright};
	}
`;