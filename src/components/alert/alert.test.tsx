import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Alert, AlertType } from '.';

const alertTypes: AlertType[] = ['accent', 'success', 'warning', 'error', 'dark', 'bright']

describe('Alert', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <Alert data-testid='alert'>test</Alert>);

		const alert = screen.getByTestId('alert');

		expect(alert).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => <Alert data-testid='alert'>Alert</Alert>);

		const alert = screen.getByTestId('alert');

		expect(alert).toBeInstanceOf(HTMLDivElement);
	});

	it('should render accent type and color bright by default', () => {
		renderWithRevKitThemeProvider(() => <Alert data-testid='alert'>Alert</Alert>);

		const alert = screen.getByTestId('alert');

		expect(alert).toHaveAttribute('type', 'accent');
		expect(alert).toHaveAttribute('color', 'bright');
	});

	alertTypes.forEach(value => {
		it(`should render ${value} type alert`, () => {
			renderWithRevKitThemeProvider(() => <Alert data-testid='alert' type={value}>Alert</Alert>);

			const alert = screen.getByTestId('alert');

			expect(alert).toHaveAttribute('type', value);
		})
	})

	it('should render children', () => {
		const children = 'Alert';

		renderWithRevKitThemeProvider(() => <Alert data-testid='alert'>{children}</Alert>);

		const alert = screen.getByTestId('alert');

		expect(alert).toHaveTextContent(children);
	})

	it('should destroy if click on close icon', () => {
		renderWithRevKitThemeProvider(() => <Alert data-testid='alert'>Closable alert</Alert>);

		const alert = screen.getByTestId('alert');
		expect(alert).toBeInTheDocument();

		const crossIcon = screen.getByTitle('cross icon');
		crossIcon.click();

		expect(alert).not.toBeInTheDocument();
	})
})