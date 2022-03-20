import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Colors } from '../themeProvider/theme';

export interface ParagraphProps {
	type?: keyof Colors;
	size?: 1 | 2;
	weight?: 'normal' | 'bold';
}

const calculateFontSize = (size: number): string => {
	switch (size) {
		case 1:
			return '16px';
		case 2:
			return '14px';
		default:
			return '16px';
	}
};

const StyledParagraph = styled('p') <{
	size: 1 | 2,
	weight: 'normal' | 'bold',
	type: keyof Colors
}>`
	font-size: ${props => calculateFontSize(props.size)};
	font-weight: ${(props) => props.weight};
  color: ${(props) => props.theme.colors[props.type]};
`;

export const Paragraph: Component<ParagraphProps> = ({ size = 1, weight = 'normal', type = 'primary', children }) => (
	<StyledParagraph
		size={size}
		weight={weight}
		type={type}
	>
		{children}
	</StyledParagraph>
);
