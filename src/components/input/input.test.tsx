
import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Input } from './input';
import { Icons } from '../icons';


describe('Input', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<Input value='Value' placeholder='Placeholder' />
		));

		const input = screen.getByTestId('input');

		expect(input).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<Input value='Value' placeholder='Placeholder' />
		));

		const input = screen.getByTestId('input');

		expect(input).toBeInstanceOf(HTMLDivElement);
	});

	it('should have placeholder attribute', () => {
		const placeholder = 'Placeholder';
		renderWithRevKitThemeProvider(() => (
			<Input placeholder={placeholder} />
		));

		const input = screen.getByTestId('input');
		const inputElement = input.querySelector('input');

		expect(inputElement).toHaveAttribute('placeholder', placeholder);
	})

	it('should render icon', () => {
		renderWithRevKitThemeProvider(() => (
			<Input value='Value' placeholder='Placeholder' icon={<Icons.Lens />} />
		));

		const input = screen.getByTestId('input');
		const icon = screen.getByTestId('lens-icon');

		expect(input).toContainElement(icon);
	})
});