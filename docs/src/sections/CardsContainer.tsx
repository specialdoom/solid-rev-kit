import { Component } from 'solid-js';
import { Button } from '../../..';
import { Card } from '../../../src/components/card';
import { Container } from '../Container';

export const CardsSection: Component = () => (
	<Container type='fluid' flex gap='16px' flexWrap='wrap'>
		<Card
			imageSrc='https://i.pinimg.com/originals/d4/62/aa/d462aa293e280254708a910f8328eb78.jpg'
			title="Card title"
			actions={[<Button variant='ghost'>Action</Button>]}
		>
			Supporting description for the card goes here like a breeze.
		</Card>
		<Card
			title="Card title"
			actions={[<Button variant='ghost'>Action</Button>]}
		>
			Supporting description for the card goes here like a breeze.
		</Card>
	</Container>
);