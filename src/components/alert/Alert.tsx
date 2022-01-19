import { Component, createSignal, Show } from 'solid-js';
import { CloseIcon } from '../icons/close'

export type AlertType = 'bright' | 'dark' | 'success' | 'warning' | 'error' | 'accent';

export interface AlertProps {
	type?: AlertType;
}

const iconColorTagTypeMap: any = {
	['bright']: '#7C9CBF',
	['dark']: '#FFFFFF',
	['success']: '#FFFFFF',
	['warning']: '#FFFFFF',
	['error']: '#FFFFFF',
	['accent']: '#FFFFFF'
}

const types = ['dark', 'success', 'error', 'accent', 'warning'];

const classNameTagType: any = {
	['dark']: 'rev-alert-dark',
	['success']: 'rev-alert-success',
	['accent']: 'rev-alert-accent',
	['warning']: 'rev-alert-warning',
	['error']: 'rev-alert-error'
}

const getClassNameByTagType = (tagType: AlertType) => {
	if (!tagType || !types.includes(tagType)) return '';

	return classNameTagType[tagType];
}

const getIconColorByTagType = (tagType: AlertType) => {
	if (!tagType || !types.includes(tagType)) return iconColorTagTypeMap['bright'];

	return iconColorTagTypeMap[tagType];
}

export const Alert: Component<AlertProps> = ({ type = 'bright', children }) => {
	const [getClosed, setClosed] = createSignal(false)

	return (
		<Show when={!getClosed()}>
			<div
				className={`rev-alert ${getClassNameByTagType(type)}`}
			>
				{children}
				<CloseIcon scale={24} color={getIconColorByTagType(type)} onClick={() => setClosed(true)} />
			</div>
		</Show >
	)
}