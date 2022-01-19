import { Component } from 'solid-js';

export interface AvatarProps {
	initials?: string;
}

export const Avatar: Component<AvatarProps> = ({ initials }) => (
	<span className="rev-avatar" >
		{initials}
	</span>
);