export function NavItem(props) {
	return (
		<li
			className='rev-nav-item'
			classList={{
				right: props.right === true,
				icon: props.icon === true
			}}
			onClick={props.onClick}
		>
			{props.children}
		</li>
	);
};
