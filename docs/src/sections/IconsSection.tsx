import { Component } from 'solid-js';
import { Cross, More, Plus, Minus, Burger } from '../../../src/components/icons';
import { Container } from '../Container';

export const IconsSection: Component = () => (
	<Container type='fluid' flex gap='16px' flexDirection='row' flexWrap='wrap'>
		<Cross />
		<More />
		<Plus />
		<Minus />
		<Burger />
	</Container>
);