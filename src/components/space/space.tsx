import { Component, JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';

const StyledSpace = styled('div')`
	display: inline-flex;
  gap: 8px;
`;

interface SpaceProps {
  children: JSXElement;
}

export const Space: Component<SpaceProps> = ({ children }) => <StyledSpace data-testid='space'>{children}</StyledSpace>;
