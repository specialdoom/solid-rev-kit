import { styled } from 'solid-styled-components';

export type DefaultAvatarType = 'steven' | 'meg' | 'jake' | 'mili'

export interface DefaultAvatarProps {
	type?: DefaultAvatarType;
	round?: boolean;
}

const getImageUrl = (type: 'steven' | 'meg' | 'jake' | 'mili') => `https://github.com/specialdoom/solid-rev-kit/blob/main/src/assets/images/${type}.png?raw=true`;

const StyledAvatar = styled('div') <{
	type: 'steven' | 'meg' | 'jake' | 'mili',
	round: boolean;
}>`
	height: 56px;
	width: 56px;
	border-radius: ${props => props.round ? '50%' : '4px'};
	background-size: cover;
	background-image: ${props => `url(${getImageUrl(props.type)})`};
`;

export const DefaultAvatar = ({ type = 'steven', round = false, ...rest }: DefaultAvatarProps) => (
	<StyledAvatar
		type={type}
		round={round}
		{...rest}
	/>
);