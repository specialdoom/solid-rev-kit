import { Component } from 'solid-js';
import { Container } from './Container';

interface SectionProps {

}

export const Section: Component<SectionProps> = ({children}) => (
	<Container type='fluid'>
		<Container flex flexDirection='row' type='full'>
			{children}
		</Container>
	</Container>
);