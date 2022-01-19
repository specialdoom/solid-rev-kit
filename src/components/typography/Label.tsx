import { Component } from 'solid-js';
import { Colors } from '../themeProvider/theme';
import { Paragraph } from './Paragraph';

export interface LabelProps {
	type: keyof Colors;
}

export const Label: Component<LabelProps> = ({ type, children }) => (
	<Paragraph size={1} type={type} weight='normal'>{children}</Paragraph>
);