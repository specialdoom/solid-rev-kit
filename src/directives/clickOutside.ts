import { onCleanup } from 'solid-js';

export const clickOutside = (el: HTMLElement, accessor: any) => {
	const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
	document.body.addEventListener('click', onClick);

	onCleanup(() => document.body.removeEventListener('click', onClick));
};