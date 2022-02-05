import { Component, For, JSXElement, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Heading, Paragraph } from '../typography';

export interface CalloutProps {
	title?: string;
	text: string;
	actions?: JSXElement[];
	small?: boolean;
}

const StyledSmallCallout = styled('div')`
	width: 100%;
	height: 80%;
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	background: ${props => props.theme.colors.bright};
	color: ${props => props.theme.colors.primary};
	padding: 24px 20px;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const ActionsContainer = styled('div') <{ small: boolean }>`
	display: inline-flex;
	justify-content: ${props => props.small ? 'flex-end' : 'flex-start'};
	align-items: center;
	gap: 8px;
`;

const StyledLargeCallout = styled('div')`
	width: 100%;
	height: auto;
	min-height: 200px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	background: ${props => props.theme.colors.bright};
	color: ${props => props.theme.colors.primary};
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	gap: 16px;
	border-radius: 16px;
`;

const SmallCallout: Component<CalloutProps> = ({ text, actions }) => (
	<StyledSmallCallout>
		<Heading size={6}>{text}</Heading>
		<ActionsContainer small>
			<For each={actions}>{action => action}</For>
		</ActionsContainer>
	</StyledSmallCallout>
);

export const Callout: Component<CalloutProps> = ({ title, text, actions, small = false }) => (
	<Show when={!small}
		fallback={() => <SmallCallout text={text} actions={actions} />}
	>
		<StyledLargeCallout>
			<Heading size={4}>{title}</Heading>
			<Paragraph>{text}</Paragraph>
			<ActionsContainer small={small}>
				<For each={actions}>{action => action}</For>
			</ActionsContainer>
		</StyledLargeCallout>
	</Show >
);