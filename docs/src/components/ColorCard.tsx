import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

export interface ColorCardProps {
	backgroundColor?: string;
}

const StyledCard = styled('div') <{ backgroundColor: string }>`
	background-color: ${props => props.backgroundColor};
	height: 240px;
	width: 260px;
	border-radius: 40px;
	padding: 40px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const BlankHeader = styled('div')`
	width: 100%;
	height: 70%;
`;

export const ColorCard: Component<ColorCardProps> = ({
	backgroundColor = '#2C2738',
	children
}) => (
	<StyledCard backgroundColor={backgroundColor}>
		<BlankHeader />
		{children}
	</StyledCard>
);