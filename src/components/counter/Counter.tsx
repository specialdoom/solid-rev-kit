import { Component, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Icons } from '../icons';
import { BaseInputProps } from '../input';

export interface CounterProps extends BaseInputProps {
	value?: number;
	maxValue?: number;
	minValue?: number;
}

const CounterContainer = styled('div') <{ disabled?: boolean }>`
	display: inline-flex;
	align-items: center;
	height: 52px;
	background: ${props => props.disabled ? props.theme.colors.shade : props.theme.colors.bright};
	border-radius: 6px;
`;

const ControlButton = styled('button') <{
	side: 'left' | 'right'
}>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 12px;
	width: 60px;
	background: transparent;
	border: unset;
	outline: unset;
	height: 100%;
	cursor: pointer;

	${props => props.side === 'left' ?
		`
			border-top-left-radius: 6px;
			border-bottom-left-radius: 6px;
		`
		:
		`
			border-top-right-radius: 6px;
			border-bottom-right-radius: 6px;
		`}

	&:active {
		background: ${props => props.theme.colors.accent};

		& > span > svg > path {
			fill: ${props => props.theme.colors.bright};
		}
	}

	&:disabled {
		background: ${props => props.theme.colors.shade};

		& > span > svg > path {
			fill: ${props => props.theme.colors.secondary};
		}
	}
`;

const ValueInput = styled('input')`
	width: 60px;
	padding: 12px;
	outline: unset;
	border: unset;
	text-align: center;
	font-size: 16px;
	height: 100%;
	border-left: 1px solid ${props => props.theme.colors.shade};
	border-right: 1px solid ${props => props.theme.colors.shade};
	background: transparent;

`;

export const Counter: Component<CounterProps> = ({ value = 0, disabled, maxValue = 999, minValue = -999, onInput, ...rest }) => {
	const [getValue, setValue] = createSignal(value);

	const handleInput = (e: Event) => {
		//@ts-ignore
		if (!(/^(0|-*[1-9]+[0-9]*)$/.test(e?.target?.value))) {
			//@ts-ignore
			e.target.value = e.target.value.slice(0, -1);
		}
		//@ts-ignore
		setValue(Number(e.target.value) ?? 0);
		onInput?.(e);
	};

	const incremenet = () => setValue(v => v + 1);

	const decrement = () => setValue(v => v - 1);

	return (
		<CounterContainer disabled={disabled}>
			<ControlButton onClick={decrement} side='left' disabled={disabled || getValue() === minValue}>
				<Icons.Minus />
			</ControlButton>
			<ValueInput value={getValue()} onInput={handleInput} disabled={disabled} {...rest} />
			<ControlButton onClick={incremenet} side='right' disabled={disabled || getValue() === maxValue}>
				<Icons.Plus />
			</ControlButton>
		</CounterContainer>
	);
};
