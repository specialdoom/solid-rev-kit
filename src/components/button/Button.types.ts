
export type ButtonType = 'bright' | 'ghost' | 'accent';

export interface ButtonProps {
	variant?: ButtonType;
	small?: boolean;
	onClick?: (event: MouseEvent) => void;
	disabled?: boolean;
}
