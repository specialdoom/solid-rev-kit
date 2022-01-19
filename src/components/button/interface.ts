interface ButtonProps {
	small?: boolean;
	bright?: boolean;
	ghost?: boolean;
	onClick?: (e: Event) => void;
	disabled?: boolean;
}

export default ButtonProps;