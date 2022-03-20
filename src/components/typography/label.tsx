import { Component } from 'solid-js';
import { Colors } from '../theme-provider/theme';
import { Paragraph } from './paragraph';

export interface LabelProps {
	type?: keyof Colors;
}

export const Label: Component<LabelProps> = ({ type = 'primary', children }) => (
	<Paragraph size={1} type={type} weight='normal'>{children}</Paragraph>
);
