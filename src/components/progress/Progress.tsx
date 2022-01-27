import { Component } from 'solid-js';

export type ProgressType = 'accent' | 'warning' | 'error' | 'success';

export interface ProgressProps {
	type: ProgressType
	percent: number;
}

export const Progress: Component<ProgressProps> = ({ type, percent }) => (
	<div>
		<div
			style={{ width: percent + '%' }}></div>
	</div>
);
