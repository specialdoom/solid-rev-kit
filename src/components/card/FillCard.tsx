import { Component, createSignal, For, JSXElement, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Icons } from '../icons';
import { clickOutside, useDirective } from '../../directives';

useDirective(clickOutside);

const { More } = Icons;

interface CardAction {
	label: string;
	onClick: () => void;
	icon?: JSXElement;
}

export interface FillCardProps {
	background?: string;
	color?: string;
	label?: string;
	title?: string;
	small?: boolean;
	actions?: CardAction[];
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

const ActionsContainer = styled('div')`
	position: absolute;
	top: 16px;
	right: 45px;
	border-radius: 4px;
	padding: 10px;
	background: ${props => props.theme.colors.bright};
	width: 70%;
	color: ${props => props.theme.colors.dark};
	display: flex;
	flex-direction: column;
	gap: 8px;

	&::before {
		position: absolute;
    top: 5px;
    right: -5px;
    height: 10px;
    width: 5px;
		content: ' ';
		background-image: url("data:image/svg+xml,%3Csvg width='5' height='10' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0L3.58579 3.58579C4.36684 4.36684 4.36684 5.63316 3.58579 6.41421L0 10V0Z' fill='%23fff'/%3E%3C/svg%3E");
	}
`;

const ActionButton = styled('button')`
	outline: none;
	border: none;
	width: 100%;
	text-align: left;
	background: ${props => props.theme.colors.bright};
	color: ${props => props.theme.colors.dark};
	font-size: 16px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 8px;

	&:hover {
		text-decoration: underline;
	}
`;

export const FillCard: Component<FillCardProps> = ({
	background = '#2C2738',
	color = '#ffffff',
	label,
	title,
	small = false,
	actions = [],
	children
}) => {
	const [getShowActions, setShowActions] = createSignal(false);

	return (
		<StyledCard background={background} color={color} small={small}>
			<Show when={actions.length > 0}>
				<ActionsHeader>
					<span use:clickOutside={() => setShowActions(false)}>
						<More fill={color} onClick={() => setShowActions(v => !v)} />
					</span>
				</ActionsHeader>
				<Show when={getShowActions()}>
					<ActionsContainer>
						<For each={actions}>{action => (
							<ActionButton onClick={action.onClick}>
								{action.icon}
								{action.label}
							</ActionButton>
						)}
						</For>
					</ActionsContainer>
				</Show>
			</Show>
			<CardDetails>
				<label>{label}</label>
				<h2>{title}</h2>
				<Show when={Boolean(children)}>
					<p>{children}</p>
				</Show>
			</CardDetails>
		</StyledCard>
	);
};