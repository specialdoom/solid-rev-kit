import { Component, JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';

export type ButtonType = 'bright' | 'ghost' | 'accent';

export interface ButtonProps {
	variant?: ButtonType;
	small?: boolean;
	disabled?: boolean;
	onClick?: (event: MouseEvent) => void;
	children: JSXElement;
}

function getStylingByVariant(variant: ButtonType, props: any) {
	if (variant === "bright") {
		return `
		background: ${props.theme.colors.bright};
		color: ${props.theme.colors.primary};
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		  &:hover {
			  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		  }
		  &:active {
			  border: 2px solid ${props.theme.colors.primary};
			box-shadow: unset;
		  }
		  &:disabled {
			  background: ${props.theme.colors.shade};
			color: rgba(44, 39, 56, 0.24);
			box-shadow: unset;
		  }
		`
	}

	if (variant === "accent") {
		return `
		background: ${props.theme.colors.accent};
		color: ${props.theme.colors.bright};
		&:hover {
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		}
		&:active {
			border: 2px solid ${props.theme.colors.primary};
			box-shadow: unset;
		}
		&:disabled {
			background: ${props.theme.colors.shade};
			color: rgba(44, 39, 56, 0.24);
			box-shadow: unset;
		}
		`
	}

	if (variant === "ghost") {
		return `
		background: ${props.theme.colors.bright};
		color: ${props.theme.colors.muted};
		border: 2px solid ${props.theme.colors.muted};
		box-shadow: unset;
		&:hover {
			color: ${props.theme.colors.accent};
  		border-color: ${props.theme.colors.accent};
  		box-shadow: unset;
		}
		&:active {
			color: ${props.theme.colors.secondary};
  		border-color: ${props.theme.colors.secondary};
		}
		&:disabled {
			background: transparent;
  		color: rgba(44, 39, 56, 0.24);
  		border-color: rgba(44, 39, 56, 0.24);
		}
		`
	}

	return `
		background: ${props.theme.colors.accent};
		color: ${props.theme.colors.bright};
		&:hover {
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		}
		&:active {
			border: 2px solid ${props.theme.colors.primary};
			box-shadow: unset;
		}
		&:disabled {
			background: ${props.theme.colors.shade};
			color: rgba(44, 39, 56, 0.24);
			box-shadow: unset;
		}
		`;
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

  ${props => getStylingByVariant(props.variant, props)}
`;

export const Button: Component<ButtonProps> = ({
	variant = 'accent',
	disabled = false,
	small = false,
	onClick,
	children
}) => (
	<StyledButton
		variant={variant}
		onClick={onClick}
		small={small}
		disabled={disabled}
		data-testid='button'
	>
		{children}
	</StyledButton>
);
