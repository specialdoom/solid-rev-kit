import { Component } from 'solid-js';
import { Colors } from '../themeProvider/theme';
import { Paragraph } from './paragraph';

export interface LabelProps {
	type?: keyof Colors;
}

export const Label: Component<LabelProps> = ({ type = 'primary', children }) => (
	<Paragraph size={1} type={type} weight='normal'>{children}</Paragraph>
);
