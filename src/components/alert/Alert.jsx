import { createSignal } from 'solid-js';
import { CloseIcon } from '../icons/close'

const iconColorTagTypeMap = {
	['bright']: '#7C9CBF',
	['dark']: '#FFFFFF',
	['success']: '#FFFFFF',
	['warning']: '#FFFFFF',
	['error']: '#FFFFFF',
	['accent']: '#FFFFFF'
}

const types = ['dark', 'success', 'error', 'accent', 'warning'];

const classNameTagType = {
	['dark']: 'rev-alert-dark',
	['success']: 'rev-alert-success',
	['accent']: 'rev-alert-accent',
	['warning']: 'rev-alert-warning',
	['error']: 'rev-alert-error'
}

const getClassNameByTagType = (tagType) => {
	if (!tagType || !types.includes(tagType)) return '';

	return classNameTagType[tagType];
}

const getIconColorByTagType = (tagType) => {
	if (!tagType || !types.includes(tagType)) return iconColorTagTypeMap['bright'];

	return iconColorTagTypeMap[tagType];
}

export function Alert(props) {
	const [getClosed, setClosed] = createSignal(false)

	return (
		<Show when={!getClosed()}>
			<div
				className={`rev-alert ${getClassNameByTagType(props.type)}`}
			>
				<span>{props.children}</span>
				<span onClick={() => setClosed(true)}>
					<CloseIcon scale={24} color={getIconColorByTagType(props.type)} />
				</span>
			</div>
		</Show >
	)
}