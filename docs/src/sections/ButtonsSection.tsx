import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Button } from '../../../src/components/button';
import { Container } from '../Container';

const ButtonTypeContainer = styled('div')`
	display: flex;
	gap: 8px;
`;

export const ButtonsSection: Component = () => (
	<Container type='fluid' flex gap='16px' flexWrap='wrap' flexDirection='column' justifyContent='flex-start'>
		<ButtonTypeContainer>
			<Button>Accent button</Button>
			<Button variant='ghost'>Ghost button</Button>
			<Button variant='bright'>Bright button</Button>
		</ButtonTypeContainer>
		<ButtonTypeContainer>
			<Button disabled>Accent disabled button</Button>
			<Button variant='ghost' disabled>Ghost disabled button</Button>
			<Button variant='bright' disabled>Bright disabled button</Button>
		</ButtonTypeContainer>
		<ButtonTypeContainer>
			<Button small>Accent small button</Button>
			<Button variant='ghost' small>Ghost small button</Button>
			<Button variant='bright' small>Bright small button</Button>
		</ButtonTypeContainer>
		<ButtonTypeContainer>
			<Button small disabled>Accent disabled small button</Button>
			<Button variant='ghost' small disabled>Ghost disabled small button</Button>
			<Button variant='bright' small disabled>Bright disabled small button</Button>
		</ButtonTypeContainer>
	</Container>
);