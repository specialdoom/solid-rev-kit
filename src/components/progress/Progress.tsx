import { Component } from 'solid-js';

export type ProgressType = 'accent' | 'warning' | 'error' | 'success';

export interface ProgressProps {
	type: ProgressType
	percent: number;
}

export const Progress: Component<ProgressProps> = ({ type, percent }) => (
	<div className="rev-progress">
		<div
			className="rev-progress-percent"
			classList={{
				[`${type}`]: type && 'accent'
			}}
			style={{ width: percent + '%' }}></div>
	</div>
);
