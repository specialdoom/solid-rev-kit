import { Component, JSXElement } from 'solid-js';
import { tippyTooltip, useDirective } from '../../directives';

useDirective(tippyTooltip);

export interface TooltipProps {
	title: string;
	placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
	type?: 'dark' | 'bright' | 'accent' | 'error' | 'warning' | 'success';
	trigger?: string;
	children: JSXElement;
}

export const Tooltip: Component<TooltipProps> = ({ title, type = 'dark', placement = 'auto', trigger = 'mouseenter', children }) => (
	<span use:tippyTooltip={{ content: title, theme: type, placement, trigger }}>
		{children}
	</span>
);
