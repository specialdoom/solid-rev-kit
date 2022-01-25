import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Colors } from '../themeProvider/theme';

export interface HeadingProps {
	size?: 1 | 2 | 3 | 4 | 5 | 6;
	weight?: 'normal' | 'bold';
	type?: keyof Colors;
}

const calculateFontSize = (size: number): string => {
	switch (size) {
		case 1:
			return '72px';
		case 2:
			return '64px';
		case 3:
			return '56px';
		case 4:
			return '34px';
		case 5:
			return '28px';
		case 6:
			return '20px';
		default:
			return '20px';
	}
};

const StyledHeading = styled('h1') <{
	size: 1 | 2 | 3 | 4 | 5 | 6;
	weight: 'normal' | 'bold';
	type: keyof Colors;
}>`
	font-size: ${props => calculateFontSize(props.size)};
	font-weight: ${(props) => props.weight};
  color: ${(props) => props.theme.colors[props.type]};
`;

export const Heading: Component<HeadingProps> = ({ size = 1, type = 'primary', weight = 'normal', children }) => (
	<StyledHeading
		size={size}
		weight={weight}
		type={type}
	>
		{children}
	</StyledHeading>
);