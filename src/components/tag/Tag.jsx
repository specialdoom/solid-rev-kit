import { createSignal, Show } from 'solid-js';
import { CloseIcon } from '../icons/close';

const iconColorTagTypeMap = {
	['bright']: '#7C9CBF',
	['dark']: '#FFFFFF',
	['success']: '#FFFFFF',
	['warning']: '#FFFFFF',
	['error']: '#FFFFFF',
	['accent']: '#FFFFFF'
}

const classNameTagType = {
	['dark']: 'rev-tag-dark',
	['success']: 'rev-tag-success',
	['accent']: 'rev-tag-accent',
	['warning']: 'rev-tag-warning',
	['error']: 'rev-tag-error'
}

const types = ['dark', 'success', 'error', 'accent', 'warning'];

const getIconColorByTagType = (tagType) => {
	if (!tagType || !types.includes(tagType)) return iconColorTagTypeMap['bright'];

	return iconColorTagTypeMap[tagType];
}

const getClassNameByTagType = (tagType) => {
	if (!tagType || !types.includes(tagType)) return '';

	return classNameTagType[tagType];
}

export function Tag(props) {
	const [getClosed, setClosed] = createSignal(false);

	return (
		<Show when={!getClosed()}>
			<span
				className={`rev-tag ${getClassNameByTagType(props.type)}`}
			>
				{props.children}
				<span class="rev-tag-icon" onClick={() => setClosed(true)}>
					<CloseIcon scale={24} color={getIconColorByTagType(props.type)} />
				</span>
			</span>
		</Show>
	)
}