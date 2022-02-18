import { Accessor } from 'solid-js';
import tippy, { Content, Placement } from 'tippy.js';

export interface TippyTooltipDirectiveProps {
	content: Content,
	theme: string,
	placement: Placement,
	trigger: string
}

export const tippyTooltip = (el: HTMLElement, tooltipProps: Accessor<TippyTooltipDirectiveProps>) => {
	const { content, placement, theme, trigger } = tooltipProps();

	tippy(el, {
		content,
		placement,
		theme,
		trigger,
		arrow: true
	});
}