import { Avatar as InternalAvatar, AvatarProps } from './Avatar';
import { DefaultAvatar, DefaultProps } from './DefaultAvatar';

const Avatar = Object.assign(InternalAvatar, {
	Steven: ({ round }: DefaultProps) => <DefaultAvatar type='steven' round={round} />,
	Mike: ({ round }: DefaultProps) => <DefaultAvatar type='mike' round={round} />,
	Mili: ({ round }: DefaultProps) => <DefaultAvatar type='mili' round={round} />,
	Meg: ({ round }: DefaultProps) => <DefaultAvatar type='meg' round={round} />
});

export { Avatar };
export type { AvatarProps };