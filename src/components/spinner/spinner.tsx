import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

export type SpinnerType = 'accent' | 'warning' | 'success' | 'error';

export interface SpinnerProps {
  type?: SpinnerType;
}

const StyledSpinner = styled('div') <{
  type: SpinnerType
}>`
	border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid ${props => props.theme.colors[props.type]};
  border-bottom: 6px solid ${props => props.theme.colors[props.type]};
  border-left: 6px solid ${props => props.theme.colors[props.type]};
  width: 44px;
  height: 44px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Spinner: Component<SpinnerProps> = ({ type = 'accent' }) => {
  return (
    <StyledSpinner type={type} data-testid='spinner' />
  );
};
