import { Component } from 'solid-js';
import { Spinner } from '../../components/spinner';
import { Container } from '../Container';

export const SpinnerSection: Component = () => (
	<Container type='fluid' flex gap='16px' flexWrap='wrap'>
		<Spinner type='accent' />
		<Spinner type='error' />
		<Spinner type='warning' />
		<Spinner type='success' />
	</Container>
);