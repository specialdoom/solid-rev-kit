import { Component } from 'solid-js'

export interface ParagraphProps {
	small?: boolean;
}

export const Paragraph: Component<ParagraphProps> = ({ small, children }) => (
	<p
		className='rev-paragraph'
		classList={{ small: small }}
	>
		{children}
	</p>
);