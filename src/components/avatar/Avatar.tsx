import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

export interface AvatarProps {
  initials?: string;
  round?: boolean;
}

const StyledAvatar = styled('div') <{
  round: boolean;
}>`
	height: 56px;
  width: 56px;
  display: flex;
  border-radius: ${props => props.round ? '50%' : '4px'};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background: ${props => props.theme.colors.muted};
  color: ${props => props.theme.colors.bright};
  font-weight: bold;
`;

export const Avatar: Component<AvatarProps> = ({ initials, round = false}) => (
  <StyledAvatar round={round} data-testid='avatar'>
    {initials}
  </StyledAvatar>
);