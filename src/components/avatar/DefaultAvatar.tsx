import { styled } from 'solid-styled-components'

export interface DefaultProps {
	type?: 'steven' | 'meg' | 'mike' | 'mili';
	round?: boolean;
}

const getImageUrl = (type: 'steven' | 'meg' | 'mike' | 'mili') => `https://storage.googleapis.com/rev-kit-assets/${type}.png`

const StyledAvatar = styled('div') <{
	type: 'steven' | 'meg' | 'mike' | 'mili',
	round: boolean;
}>`
	height: 56px;
	width: 56px;
	border-radius: ${props => props.round ? '50%' : '4px'};
	background-size: cover;
	background-image: ${props => `url(${getImageUrl(props.type)})`};
`;

export const DefaultAvatar = ({ type = 'steven', round = false }: DefaultProps) => (
	<StyledAvatar
		type={type}
		round={round}
	/>
);