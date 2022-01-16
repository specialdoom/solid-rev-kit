import { defaultAvatars } from './defaultAvatars';
import { Dynamic } from 'solid-js/web';

export function Avatar(props) {
	const defaultAvatar = defaultAvatars[defaultAvatars.length * Math.random() | 0];

	return (
		<span className="rev-avatar" style={{ 'background': props.default ? defaultAvatar.backgroundColor : '#7C9CBF' }}>
			<Show
				when={props.default}
				fallback={() => <>{props.initials}</>}
			>
				<Dynamic component={defaultAvatar.component} />
			</Show>
		</span>
	);
};