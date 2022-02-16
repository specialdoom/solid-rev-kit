import { Component, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Icons } from '../icons';

const { More } = Icons;

export interface FillCardProps {
	background?: string;
	color?: string;
	label?: string;
	title?: string;
	small?: boolean;
}

const isValidUrl = (_string: string) => {
	const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
	return matchPattern.test(_string);
};

const StyledCard = styled('div') <{ background: string, color: string, small: boolean }>`
	position: relative;
	background: ${props => isValidUrl(props.background) ? `url(${props.background})` : props.background};
	color: ${props => props.color};
	height: ${props => props.small ? '240px' : '430px'};
	background-size: cover;
	width: 260px;
	border-radius: 20px;
	padding: 16px 20px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ActionsHeader = styled('div')`
	top: 16px;
	right: 20px;
	position: absolute;
	display: inline-flex;
	justify-content: flex-end;

	& svg {
		cursor: pointer;
	}
`;

const CardDetails = styled('div')`
	position: absolute;
	bottom: 16px;
	left: 20px;
	right: 20px;

	label {
		opacity: 0.8;
	}
`;

export const FillCard: Component<FillCardProps> = ({
	background = '#2C2738',
	color = '#ffffff',
	label,
	title,
	small = false,
	children
}) => (
	<StyledCard background={background} color={color} small={small}>
		<ActionsHeader>
			<More fill={color} />
		</ActionsHeader>
		<CardDetails>
			<label>{label}</label>
			<h2>{title}</h2>
			<Show when={Boolean(children)}>
				<p>{children}</p>
			</Show>
		</CardDetails>
	</StyledCard>
);