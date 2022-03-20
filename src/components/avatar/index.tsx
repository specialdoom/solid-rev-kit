import { Avatar as InternalAvatar, AvatarProps } from './avatar';
import { DefaultAvatar, DefaultAvatarProps } from './default-avatar';

const Avatar = Object.assign(InternalAvatar, {
	Steven: ({ round }: DefaultAvatarProps) => <DefaultAvatar type='steven' round={round} />,
	Jake: ({ round }: DefaultAvatarProps) => <DefaultAvatar type='jake' round={round} />,
	Mili: ({ round }: DefaultAvatarProps) => <DefaultAvatar type='mili' round={round} />,
	Meg: ({ round }: DefaultAvatarProps) => <DefaultAvatar type='meg' round={round} />
});

export { Avatar };
export type { AvatarProps };