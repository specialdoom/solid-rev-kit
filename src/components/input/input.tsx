import { Component, JSXElement, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { BaseInputProps } from '.';

export interface InputProps extends BaseInputProps {
	value?: string;
	icon?: JSXElement;
}

const InputContainer = styled('div') <{
	disabled?: boolean
}>`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	height: 52px;
	outline: unset;
	border-radius: 6px;
	background: ${props => props.disabled ? props.theme.colors.shade : props.theme.colors.bright};
	border: 1px solid ${props => props.theme.colors.shade};
	font-size: 16px;
	box-sizing: border-box;
	gap: 16px;
	padding: 0 16px;
	min-width: 360px;

	&:focus-within {
		outline: none;
		border: 2px solid ${props => props.theme.colors.accent};
	}
`;

const StyledInput = styled('input')`
	outline: unset;
	background: transparent;
	border: unset;
	font-size: 16px;
	margin: 16px 0;
	width: 100%;

	&::placeholder {
		color: ${props => props.theme.colors.muted};
	}

	&:disabled, &:disabled::placeholder {
		color: ${props => props.theme.colors.secondary};
	}
`;

export const Input: Component<InputProps> = ({ icon, disabled, ...rest }) => (
	<InputContainer disabled={disabled} data-testid='input'>
		<StyledInput
			disabled={disabled}
			value={rest.value}
			placeholder={rest.placeholder}
			{...rest}
		/>
		<Show when={icon}>
			{icon}
		</Show>
	</InputContainer>
);
