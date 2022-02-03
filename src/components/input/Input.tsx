import { Component, JSXElement, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { IconElement } from '../icons';

export interface InputProps {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	icon?: JSXElement;
	onChange?: (event: Event) => void;
	onBlur?: (event: Event) => void;
	onInput?: (event: Event) => void;
	onFocus?: (event: Event) => void;
}

const InputContainer = styled('div')`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	height: 52px;
	outline: unset;
	border-radius: 6px;
	background: ${props => props.theme.colors.bright};
	border: 1px solid ${props => props.theme.colors.shade};
	font-size: 16px;
	box-sizing: border-box;
	gap: 16px;
	padding: 0 16px;

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

	&::placeholder {
		color: ${props => props.theme.colors.muted};
	}

	&:disabled, &:disabled::placeholder {
		color: ${props => props.theme.colors.secondary};
	}
`;

export const Input: Component<InputProps> = ({ value, placeholder, disabled, icon, onChange, onBlur, onInput }) => (
	<InputContainer>
		<StyledInput
			value={value}
			placeholder={placeholder}
			disabled={disabled}
			onChange={onChange}
			onBlur={onBlur}
			onInput={onInput}
		/>
		<Show when={icon}>
			{icon}
		</Show>
	</InputContainer>
);