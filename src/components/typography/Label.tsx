import { Component } from 'solid-js';
import { Paragraph } from './Paragraph';

export const Label: Component = ({ children }) => (
	<Paragraph>{children}</Paragraph>
);