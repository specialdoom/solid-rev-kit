import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

export type ChatBubbleType = 'bright' | 'dark' | 'blueberry' | 'strawberry';

export interface ChatBubbleProps {
	type?: ChatBubbleType;
	placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const arrowColorTypeMap = {
	['bright']: '#D5D6D7',
	['dark']: '#585364',
	['blueberry']: '#4874E9',
	['strawberry']: '#DF3468',
};

const getArrowColorByTypeMap = (type: ChatBubbleType) => arrowColorTypeMap[type] ?? '#585364';

const StyledBubble = styled('div') <{
	type: 'bright' | 'dark' | 'blueberry' | 'strawberry',
	placement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}>`
	position: relative;
	height: 50px;
	min-width: 240px;
	border-radius: 6px;
	padding: 16px;
	font-size: 14px;
	box-sizing: border-box;
	color: ${props => props.type === 'bright' ? props.theme.colors.secondary : props.theme.colors.bright};
	background: ${props => props.theme.colors[props.type]};

	&::before {
		position: absolute;
		z-index: -1;
		content: ' ';
		width: 0;
		height: 0;
		border-style: solid;
	}

	&[h-position="left"]::before {
		left: 0;
		border-width: 9px 0 9px 9px;
		border-color: transparent transparent transparent ${props => getArrowColorByTypeMap(props.type)};
	}

	&[h-position="right"]::before {
		right: 0;
		border-width: 9px 9px 9px 0;
		border-color: transparent ${props => getArrowColorByTypeMap(props.type)} transparent transparent;
	}

	&[v-position="top"]::before {
		top: -8px;
	}

	&[v-position="bottom"]::before {
		bottom: -8px;
	}
`;

export const ChatBubble: Component<ChatBubbleProps> = ({ type = 'blueberry', placement = 'top-left', children }) => (
	<StyledBubble
		type={type}
		placement={placement}
		v-position={placement.split('-')[0]}
		h-position={placement.split('-')[1]}
	>
		{children}
	</StyledBubble>
);