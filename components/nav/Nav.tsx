import { Component, createSignal, ComponentProps } from 'solid-js';
import { BurgerIcon } from '../icons/burger';
import { NavItem } from './NavItem';

type NavProps = {
	responsive?: boolean;
}

export const FlexContainer: Component = (props) => {
	return (
		<div style={{ display: 'inline-flex', "justify-content": 'center', "align-items": 'center', 'min-height': '62px' }}>
			{props.children}
		</div>
	)
}

export const Nav: Component<NavProps> = ({ children }) => {
	const [getShouldAddResponsiveClass, setShouldAddResponsiveClass] = createSignal(false);

	return <ul className='rev-nav'
		classList={{
			responsive: getShouldAddResponsiveClass() === true
		}}
	>
		{children}
		<NavItem right icon onClick={() => setShouldAddResponsiveClass(value => !value)}>
			<FlexContainer>
				<BurgerIcon /> Menu
			</FlexContainer>
		</NavItem>
	</ul>
}