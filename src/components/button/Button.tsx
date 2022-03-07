import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

export type ButtonType = 'bright' | 'ghost' | 'accent';

export interface ButtonProps {
	variant?: ButtonType;
	small?: boolean;
	disabled?: boolean;
	onClick?: (event: MouseEvent) => void;
}

const StyledButton = styled('button') <{
	variant: ButtonType;
	small: boolean;
}>`
  box-sizing: border-box;
  border: unset;
  border-radius: 3px;
  height: ${props => props.small ? '34px' : '48px'};
  padding: 4px 20px;
  font-size: 14px;
  min-width: 100px;

	&.bright {
			background: ${props => props.theme.colors.bright};
  		color: ${props => props.theme.colors.primary};
  		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
			}

			&:active {
				border: 2px solid ${props => props.theme.colors.primary};
  			box-shadow: unset;
			}

			&:disabled {
				background: ${props => props.theme.colors.shade};
  			color: rgba(44, 39, 56, 0.24);
  			box-shadow: unset;
			}
	}

	&.accent {
		background: ${props => props.theme.colors.accent};
		color: ${props => props.theme.colors.bright};

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		}

		&:active {
			border: 2px solid ${props => props.theme.colors.primary};
			box-shadow: unset;
		}

		&:disabled {
			background: ${props => props.theme.colors.shade};
			color: rgba(44, 39, 56, 0.24);
			box-shadow: unset;
		}
	}

	&.ghost {
		background: ${props => props.theme.colors.bright};
		color: ${props => props.theme.colors.muted};
		border: 2px solid ${props => props.theme.colors.muted};
		box-shadow: unset;

		&:hover {
			color: ${props => props.theme.colors.accent};
  		border-color: ${props => props.theme.colors.accent};
  		box-shadow: unset;
		}

		&:active {
			color: ${props => props.theme.colors.secondary};
  		border-color: ${props => props.theme.colors.secondary};
		}

		&:disabled {
			background: transparent;
  		color: rgba(44, 39, 56, 0.24);
  		border-color: rgba(44, 39, 56, 0.24);
		}
	}
`;

export const Button: Component<ButtonProps> = ({
	variant = 'accent',
	disabled = false,
	small = false,
	onClick,
	children,
	...rest
}) => (
	<StyledButton
		variant={variant}
		onClick={onClick}
		small={small}
		disabled={disabled}
		className={`${variant}`}
		{...rest}
	>
		{children}
	</StyledButton>
);