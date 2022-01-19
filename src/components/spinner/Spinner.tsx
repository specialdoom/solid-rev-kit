import { Component } from 'solid-js';

export type SpinnerType = 'accent' | 'warning' | 'success' | 'error';

export interface SpinnerProps {
	type: SpinnerType;
}

export const Spinner: Component<SpinnerProps> = ({ type }) => {
	return (
		<div
			className='rev-spinner'
			classList={{
				[type]: type
			}}
		></div>
	);
};