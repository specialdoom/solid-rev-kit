import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

export interface ProgressProps {
	type?: 'accent' | 'warning' | 'success' | 'error',
	percent?: number,
	loading?: boolean
}

const StyledProgress = styled('div') <{
	type: 'accent' | 'warning' | 'success' | 'error',
	percent?: number,
	loading: boolean
}>`
	width: 100%;
	height: 8px;
	background: ${props => props.theme.colors.shade};
	border-radius: 2px;

	.progress {
		background: ${props => props.theme.colors[props.type]};
		width: ${props => `${props.percent}%`};
		height: 8px;
		border-radius: 2px;

		${props => props.percent ? `
			width: ${props.percent}%;
		`: ''}
		
		${props => props.loading ? `
			animation-name: loading;
  		animation-duration: 4s;
			animation-iteration-count: infinite;
		` : ''};
	}

	@keyframes loading {
		from {width: 0%;}
		to {width: 100%;}
	}
`;

export const Progress: Component<ProgressProps> = ({ type = 'accent', percent, loading = false }) => (
	<StyledProgress type={type} percent={percent} loading={loading} data-testid='progress'>
		<div className="progress"></div>
	</StyledProgress>
);