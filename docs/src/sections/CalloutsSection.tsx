import { Component } from 'solid-js';
import { Button } from '../../../src/components/button';
import { Callout } from '../../../src/components/callout';
import { Container } from '../Container';

export const CalloutsSection: Component = () => (
	<Container type='fluid' flex gap='16px' flexWrap='wrap'>
		<Callout
			title='Callout Title'
			text='Supportive text for the callout goes here like a pro, which informs and helps users decide what they should do next.'
			actions={[
				<Button small>Action</Button>,
				<Button variant='ghost' small> Action</Button>
			]}
		/>
		<Callout
			text='Supportive text for the callout.'
			actions={[
				<Button small>Action</Button>,
				<Button variant='ghost' small> Action</Button>
			]}
			small
		/>
	</Container>
);