import { Colors, theme } from '../theme-provider/theme';

const generateTypes = () => {
	const tooltipTypes: (keyof Colors)[] = ['bright', 'dark', 'accent', 'error', 'warning', 'success'];

	let types = '';

	for (const type of tooltipTypes) {
		types += `
		.tippy-box[data-theme~=${type}] {
			background-color: ${theme.colors[type]};
		}

		.tippy-box[data-theme~=${type}][data-placement^="bottom"] > .tippy-arrow {
			background-image: url("data:image/svg+xml,%3Csvg width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 5H0L3.58579 1.41421C4.36684 0.633163 5.63317 0.633165 6.41421 1.41421L10 5Z' fill='%23${theme.colors[type].split('#')[1]}'/%3E%3C/svg%3E");
		}
	
		.tippy-box[data-theme~=${type}][data-placement^="top"] > .tippy-arrow {
			background-image: url("data:image/svg+xml,%3Csvg width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0L6.41421 3.58579C5.63316 4.36684 4.36684 4.36684 3.58579 3.58579L0 0H10Z' fill='%23${theme.colors[type].split('#')[1]}'/%3E%3C/svg%3E");
		}

		.tippy-box[data-theme~=${type}][data-placement^="left"] > .tippy-arrow {
			background-image: url("data:image/svg+xml,%3Csvg width='5' height='10' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0L3.58579 3.58579C4.36684 4.36684 4.36684 5.63316 3.58579 6.41421L0 10V0Z' fill='%23${theme.colors[type].split('#')[1]}'/%3E%3C/svg%3E");
		}

		.tippy-box[data-theme~=${type}][data-placement^="right"] > .tippy-arrow {
			background-image: url("data:image/svg+xml,%3Csvg width='5' height='10' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 0V10L1.41421 6.41421C0.633163 5.63316 0.633165 4.36683 1.41421 3.58579L5 0Z' fill='%23${theme.colors[type].split('#')[1]}'/%3E%3C/svg%3E");
		}
		`;
	}

	return types;
};

export const TooltipStyle = `
	.tippy-box[data-animation="fade"][data-state="hidden"] {
		opacity: 0;
	}

	[data-tippy-root] {
		max-width: calc(100vw - 10px);
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
		transition-property: transform, visibility, opacity;
	}

	.tippy-box[data-placement^="top"] > .tippy-arrow {
		width: 10px;
		height: 5px;
		bottom: -5px;
	}

	.tippy-box[data-placement^="bottom"] > .tippy-arrow {
		width: 10px;
		height: 5px;
		top: -5px;
	}

	.tippy-box[data-placement^="left"] > .tippy-arrow {
		right: -5px;
		width: 5px;
		height: 10px;
	}

	.tippy-box[data-placement^="right"] > .tippy-arrow {
		left: -5px;
		width: 5px;
		height: 10px;
	}

	.tippy-box[data-inertia][data-state="visible"] {
		transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
	}

	.tippy-box[data-theme~='bright'] {
		color: ${theme.colors.dark};
	}

	.tippy-content {
		position: relative;
		padding: 7px 10px;
		z-index: 1;
	}

	${generateTypes()}
`;
