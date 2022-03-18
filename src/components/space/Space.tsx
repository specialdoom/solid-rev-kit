import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const StyledSpace = styled('div')`
	display: inline-flex;
  gap: 8px;
`;

export const Space: Component = ({ children }) => <StyledSpace data-testid='space'>{children}</StyledSpace>;