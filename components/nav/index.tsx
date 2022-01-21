import { Nav as InternalNav } from './Nav';
import { NavItem } from './NavItem';

export const Nav = Object.assign(InternalNav, {
	Item: NavItem,
});
