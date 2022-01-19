import { Component } from 'solid-js';

export interface ButtonProps {
	small?: boolean;
	bright?: boolean;
	ghost?: boolean;
	onClick?: (e: Event) => void;
	disabled?: boolean;
}

export const Button: Component<ButtonProps> = (props) => (
	<button
		className={`rev-btn`}
		classList={{
			'rev-btn-small': props.small,
			'rev-btn-bright': props.bright,
			'rev-btn-ghost': props.ghost
		}}
		onClick={props.onClick}
		disabled={props.disabled}
	>
		{props.children}
	</button>
);