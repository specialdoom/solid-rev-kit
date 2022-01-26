import { Component, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { More } from '../icons';

export interface ColorCardProps {
	backgroundColor?: string;
	color?: string;
	label?: string;
	title?: string;
	description?: string;
}

const StyledCard = styled('div') <{ backgroundColor: string, color: string }>`
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	height: 240px;
	width: 260px;
	border-radius: 20px;
	padding: 16px 20px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ActionsHeader = styled('div')`
	display: inline-flex;
	justify-content: flex-end;
	width: 100%;
	height: 60%;
`;

export const ColorCard: Component<ColorCardProps> = ({
	backgroundColor = '#2C2738',
	color = '#ffffff',
	label,
	title,
	children
}) => (
	<StyledCard backgroundColor={backgroundColor} color={color}>
		<ActionsHeader>
			<More fill={color} />
		</ActionsHeader>
		<label>{label}</label>
		<h2>{title}</h2>
		<Show when={Boolean(children)}>
			<p>{children}</p>
		</Show>
	</StyledCard>
);