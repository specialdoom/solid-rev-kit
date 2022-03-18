import { screen } from 'solid-testing-library';
import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { Spinner, SpinnerType } from './spinner';

const spinnerTypes: SpinnerType[] = ['accent', 'error', 'success', 'warning'];

describe('Spinner', () => {
	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<Spinner />
		));

		const spinner = screen.getByTestId('spinner');

		expect(spinner).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<Spinner />
		));

		const spinner = screen.getByTestId('spinner');

		expect(spinner).toBeInstanceOf(HTMLDivElement);
	});

	spinnerTypes.forEach(type => {
		it(`should render ${type} type spinner`, () => {
			renderWithRevKitThemeProvider(() => (
				<Spinner type={type} />
			));

			const spinner = screen.getByTestId('spinner');

			expect(spinner).toHaveAttribute('type', type);
		});
	});

	it('should have defined spin animation', () => {
		renderWithRevKitThemeProvider(() => (
			<Spinner />
		));

		const spinner = screen.getByTestId('spinner');

		expect(window.getComputedStyle(spinner).animation).toContain('spin');
	});
})