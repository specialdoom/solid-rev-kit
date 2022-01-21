import { Component, createSignal } from 'solid-js';
import { MinusIcon } from '../icons/minus';
import { PlusIcon } from '../icons/plus';

export interface CounterProps {
	onChange: (event: Event) => void;
	onBlur: (event: Event) => void;
}

export const Counter: Component<CounterProps> = ({ onChange, onBlur }) => {
	const [getValue, setValue] = createSignal(0);

	const increase = () => setValue(v => v + 1);
	const decrease = () => setValue(v => v - 1);

	return (
		<div class="rev-counter">
			<button className="rev-counter-minus rev-counter-control" onClick={decrease}>
				<MinusIcon />
			</button>
			<input
				type="text"
				readOnly
				value={getValue()}
				onChange={onChange}
				onBlur={onBlur}
				className="rev-counter-value"
			/>
			<button className="rev-counter-plus rev-counter-control" onClick={increase}>
				<PlusIcon />
			</button>
		</div>
	)
}