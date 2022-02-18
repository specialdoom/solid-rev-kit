import { Accessor } from 'solid-js';
import tippy, { Content, Placement } from 'tippy.js';

export interface TippyTooltipDirectiveProps {
	content: Content,
	theme: string,
	placement: Placement
}

export const tippyTooltip = (el: HTMLElement, tooltipProps: Accessor<TippyTooltipDirectiveProps>) => {
	const tippyProps = tooltipProps();

	tippy(el, {
		content: tippyProps.content,
		placement: tippyProps.placement,
		theme: tippyProps.theme,
		trigger: 'click',
		arrow: true
	});
}