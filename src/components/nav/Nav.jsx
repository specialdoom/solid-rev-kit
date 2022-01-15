import { createSignal } from 'solid-js';
import { BurgerIcon } from '../icons/burger';
import { NavItem } from './NavItem';

export function FlexContainer(props) {
	return (
		<div style={{ display: 'inline-flex', "justify-content": 'center', "align-items": 'center' }}>
			{props.children}
		</div>
	)
}

export function Nav(props) {
	const [getShouldAddResponsiveClass, setShouldAddResponsiveClass] = createSignal(false);

	return <ul className='rev-nav'
		classList={{
			responsive: getShouldAddResponsiveClass() === true
		}}
	>
		{props.children}
		<NavItem right icon onClick={() => setShouldAddResponsiveClass(value => !value)}>
			<FlexContainer>
				<BurgerIcon /> Menu
			</FlexContainer>
		</NavItem>
	</ul>
}