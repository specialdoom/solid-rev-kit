import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Colors } from '../themeProvider/theme';

type TagType = 'accent' | 'success' | 'warning' | 'error' | 'dark' | 'bright';


export interface TagProps {
	type?: TagType;
	color?: keyof Colors;
}

const StyledTag = styled('span') <{
	type: keyof Colors,
	color: keyof Colors
}>`
	display: inline-flex;
	font-size: 14px;
	padding: 8px;
	align-items: center;
	justify-content: space-around;
	min-width: 50px;
	background: ${props => props.theme.colors[props.type]};
	color: ${props => props.theme.colors[props.color]};
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 17px;
`;

export const Tag: Component<TagProps> = ({
	type = 'accent',
	color = 'bright',
	children
}) => (
	<StyledTag
		type={type}
		color={color}
	>
		{children}
	</StyledTag>
);