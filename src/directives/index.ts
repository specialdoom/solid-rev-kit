import { clickOutside } from './clickOutside';
import { tippyTooltip, TippyTooltipDirectiveProps } from './tippyTooltip';

declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			tippyTooltip: TippyTooltipDirectiveProps,
			clickOutside: () => void
		}
	}
}

export const useDirective = (_: any) => { };

export { tippyTooltip, clickOutside };