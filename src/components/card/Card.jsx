import { Show } from 'solid-js';

export function Card(props) {
	return (
		<div className="rev-card">
			<Show
				when={props.imageSrc}
			>
				<img className="rev-card-image" src={props.imageSrc} alt="Card image" />
			</Show>
			<span className="rev-card-title">
				{props.title}
			</span>
			<div className="rev-card-body">
				{props.body}
			</div>
			<div className="rev-card-actions">
				<For each={props.actions}>{(action) => action}</For>
			</div>
		</div >
	)
}