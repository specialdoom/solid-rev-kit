import { Component, createSignal, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Colors } from '../themeProvider/theme';

export interface TagProps {
	type?: keyof Colors;
	textColor?: keyof Colors;
}

const StyledTag = styled('span') <{
	type: keyof Colors,
	textColor: keyof Colors
}>`
	display: inline-flex;
	font-size: 14px;
	padding: 8px;
	align-items: center;
	justify-content: space-around;
	min-width: 50px;
	background: ${props => props.theme.colors[props.type]};
	color: ${props => props.theme.colors[props.textColor]};
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 17px;
`;

export const Tag: Component<TagProps> = ({
	type = 'accent',
	textColor = 'bright',
	children
}) => {
	const [getClosed, setClosed] = createSignal(false);

	return (
		<Show when={!getClosed()}>
			<StyledTag
				type={type}
				textColor={textColor}
			>
				{children}
			</StyledTag>
		</Show>
	)
}