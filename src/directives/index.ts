import { tippyTooltip, TippyTooltipDirectiveProps } from './tippyTooltip';

declare module "solid-js" {
	namespace JSX {
		interface Directives {
			tippyTooltip: TippyTooltipDirectiveProps
		}
	}
}

export const useDirective = (_directive: any) => { };

export { tippyTooltip };