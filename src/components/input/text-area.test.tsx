
import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { TextArea } from './text-area';


describe('Input', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<TextArea value="Value" />
		));

		const textArea = screen.getByTestId('text-area');

		expect(textArea).toBeInTheDocument();
	});

	it('should render <textarea> element', () => {
		renderWithRevKitThemeProvider(() => (
			<TextArea value="Value" />
		));

		const textArea = screen.getByTestId('text-area');

		expect(textArea).toBeInstanceOf(HTMLTextAreaElement);
	})

	it('should have rows attribute', () => {
		const rows = 4;
		renderWithRevKitThemeProvider(() => (
			<TextArea value="Value" rows={rows} />
		));

		const textArea = screen.getByTestId('text-area');

		expect(textArea).toHaveAttribute('rows', rows.toString());
	});

	it('should have placeholder attribute', () => {
		const placeholder = 'Placeholder';
		renderWithRevKitThemeProvider(() => (
			<TextArea placeholder={placeholder} />
		));

		const textArea = screen.getByTestId('text-area');

		expect(textArea).toHaveAttribute('placeholder', placeholder);
	});
});