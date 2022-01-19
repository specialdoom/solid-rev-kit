import { Component, createSignal, Show } from 'solid-js';
import { CloseIcon } from '../icons/close';

export type TagType = 'dark';

export interface TagProps {
	type: TagType;
}

export const Tag: Component<TagProps> = ({ type, children }) => {
	const [getClosed, setClosed] = createSignal(false);

	return (
		<Show when={!getClosed()}>
			<span
				className={`rev-tag rev-tag-dark`}
			>
				{children}
				<span class="rev-tag-icon" onClick={() => setClosed(true)}>
					<CloseIcon scale={24} color={"#2c2738"} />
				</span>
			</span>
		</Show>
	)
}