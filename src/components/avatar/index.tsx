import { Avatar as AvatarComponent, AvatarProps } from './Avatar';
import { Meg, Steven, Jake, Mili } from './defaultAvatars';

const Avatar = Object.assign(AvatarComponent, {
	Meg, Steven, Jake, Mili
})

export { Avatar };
export type { AvatarProps }