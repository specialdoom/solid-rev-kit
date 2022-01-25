import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

interface ContainerProps {
	type: 'full' | 'fluid'
	flex?: boolean
	flexDirection?:
	| 'row'
	| 'row-reverse'
	| 'column'
	| 'column-reverse'
	| 'initial'
	| 'inherit'
	justifyContent?:
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'initial'
	| 'inherit'
	alignItems?:
	| 'stretch'
	| 'center'
	| 'flex-start'
	| 'flex-end'
	| 'baseline'
	| 'initial'
	| 'inherit',
	gap?: string,
	flexWrap?:
	| 'wrap'
	| 'wrap-reverse'
	| 'no-wrap',
	padding?: string
}

const StyledContainer = styled('div') <{
	type: 'full' | 'fluid'
	flex?: boolean
	flexDirection?:
	| 'row'
	| 'row-reverse'
	| 'column'
	| 'column-reverse'
	| 'initial'
	| 'inherit'
	justifyContent: string
	alignItems: string,
	gap: string,
	flexWrap: string,
	padding: string;
}>`
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.type === 'full' ? '100%' : '80%'};
  display: ${props => props.flex ? 'flex' : 'block'};
  flex-direction: ${props =>
		props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
	gap: ${props => props.gap};
	flex-wrap: ${props => props.flexWrap};
	padding: ${props => props.padding};
`;

export const Container: Component<ContainerProps> = ({
	type,
	flex,
	flexDirection,
	alignItems = 'stretch',
	justifyContent = 'flex-start',
	gap = '0px',
	flexWrap = 'no-wrap',
	padding = '8px 0',
	children
}) => (
	<StyledContainer
		alignItems={alignItems}
		justifyContent={justifyContent}
		type={type}
		flex={flex}
		flexDirection={flexDirection}
		gap={gap}
		flexWrap={flexWrap}
		padding={padding}
	>
		{children}
	</StyledContainer>
);