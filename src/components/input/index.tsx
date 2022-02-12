import { Input } from './Input';
import { TextArea } from './TextArea';

export { Input, TextArea };

interface BaseInputProps {
	placeholder?: string;
	disabled?: boolean;
	onChange?: (event: Event) => void;
	onBlur?: (event: Event) => void;
	onInput?: (event: Event) => void;
	onFocus?: (event: Event) => void;
}

export type { BaseInputProps };