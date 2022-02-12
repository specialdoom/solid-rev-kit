import { Component, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { BaseInputProps } from '../input';

export interface SwitchProps extends BaseInputProps {
	checked?: boolean;
}

const StyledButton = styled('button')`
	background: unset;
	border: unset;
	outline: unset;

	input {
		height: 0;
		width: 0;
		opacity: 0;
		z-index: -2;
	}

	.slider {
		cursor: pointer;
		width: 52px;
		height: 30px;
		border-radius: 34px;
		border-color: #ccc;
		background-color: ${props => props.theme.colors.bright};
		border: 1px solid ${props => props.theme.colors.shade};
		display: inline-flex;
		align-items: center;
		padding: 0 4px;
  	transition: .4s;
	}

	.slider .toggle {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background-color: ${props => props.theme.colors.bright};
		border: 1px solid ${props => props.theme.colors.shade};
  	transition: .4s;
	}

	input:checked + .slider {
		background-color: ${props => props.theme.colors.accent};
  	transition: .4s;
	}

	input:disabled + .slider {
		background-color: ${props => props.theme.colors.shade};
	}

	input:disabled + .slider .toggle {
		background-color: ${props => props.theme.colors.shade};
		border: 1px solid ${props => props.theme.colors.bright};
	}

	input:checked:disabled + .slider .toggle {
		background-color: ${props => props.theme.colors.bright};
	}

	input:checked + .slider .toggle {
		transform: translateX(22px);
  	transition: .4s;
	}
`;

export const Switch: Component<SwitchProps> = ({ disabled = false, checked = false, ...rest }) => {
	const [getChecked, setChecked] = createSignal(checked);

	const updateChecked = () => {
		if (disabled) return;

		setChecked(v => !v);
	}

	return (
		<StyledButton onClick={updateChecked}>
			<input type='checkbox' disabled={disabled} checked={getChecked()} {...rest} />
			<div class='slider'>
				<div class='toggle'>
				</div>
			</div>
		</StyledButton>
	);
};