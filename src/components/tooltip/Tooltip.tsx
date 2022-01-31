import { Component, onMount } from 'solid-js';
import tippy from 'tippy.js';

export interface TooltipProps {
	type?: 'accent' | 'bright' | 'primary';
	placement?: 'auto' | 'top' | 'bottom' | 'right' | 'left';
	trigger?: 'mouseenter' | 'click';
	title: string;
}

export const Tooltip: Component<TooltipProps> = ({ type = 'accent', title, placement = 'auto', trigger = 'mouseenter', children }) => {
	let divRef: any;

	onMount(() => {
		if (divRef) tippy(divRef, {
			content: title,
			theme: type,
			placement: placement,
			trigger: trigger
		})
	})

	return <div ref={divRef} style={{ width: "fit-content", height: "fit-content" }}>{children}</div>
}