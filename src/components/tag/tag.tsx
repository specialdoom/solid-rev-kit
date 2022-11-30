import { Component, createSignal, JSXElement, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Icons } from '../icons';
import { Colors } from '../theme-provider/theme';

export type TagType = 'accent' | 'success' | 'warning' | 'error' | 'dark' | 'bright';

export interface TagProps {
	type?: TagType;
	color?: keyof Colors;
	closable?: boolean;
	children: JSXElement;
}

const StyledTag = styled('span') <{
	type: keyof Colors,
	color: keyof Colors
}>`
	display: inline-flex;
	font-size: 14px;
	padding: 8px 16px;
	align-items: center;
	justify-content: space-around;
	min-width: 50px;
	background: ${props => props.theme.colors[props.type]};
	color: ${props => props.theme.colors[props.color]};
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 17px;
	gap: 8px;

	& svg {
		height: 12px;
		width: 12px;
		cursor: pointer;
	}

	& path {
		fill: ${props => props.theme.colors[props.color]};
	}
`;

export const Tag: Component<TagProps> = ({
	type = 'accent',
	color = 'bright',
	closable = false,
	children
}) => {
	const [getClosed, setClosed] = createSignal(true);

	return (
		<Show when={getClosed()}>
			<StyledTag
				type={type}
				color={color}
				data-testid='tag'
			>
				{children}
				<Show when={closable}>
					<Icons.Cross onClick={() => setClosed(false)} />
				</Show>
			</StyledTag>
		</Show>
	);
};
