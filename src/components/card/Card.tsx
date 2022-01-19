import { Component, For, JSXElement, Show } from 'solid-js';

export interface CardProps {
	imageSrc?: string;
	title?: string;
	body?: string;
	actions?: JSXElement[];
}

export const Card: Component<CardProps> = ({ imageSrc, title, body, actions }) => {
	return (
		<div className="rev-card">
			<Show
				when={imageSrc}
			>
				<img className="rev-card-image" src={imageSrc} alt="Card image" />
			</Show>
			<span className="rev-card-title">
				{title}
			</span>
			<div className="rev-card-body">
				{body}
			</div>
			<div className="rev-card-actions">
				<For each={actions}>{(action) => action}</For>
			</div>
		</div >
	)
}