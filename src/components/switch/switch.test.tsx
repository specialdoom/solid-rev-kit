import { cleanup, screen } from 'solid-testing-library';
import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { Switch } from './switch';

describe('Switch', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<Switch />
		));

		const _switch = screen.getByTestId('switch');

		expect(_switch).toBeInTheDocument();
	});

	it('should render a <button> component', () => {
		renderWithRevKitThemeProvider(() => (
			<Switch />
		));

		const _switch = screen.getByTestId('switch');

		expect(_switch).toBeInstanceOf(HTMLButtonElement);
	});

	it('should check/uncheck on click', () => {
		renderWithRevKitThemeProvider(() => (
			<Switch />
		));

		const _switch = screen.getByTestId('switch');
		const switchInput = _switch.querySelector('input');
		expect(switchInput?.checked).toBe(false);

		_switch.click();
		expect(switchInput?.checked).toBe(true);

		_switch.click();
		expect(switchInput?.checked).toBe(false);
	});

	it('should be checked', () => {
		renderWithRevKitThemeProvider(() => (
			<Switch checked />
		));

		const _switch = screen.getByTestId('switch');
		const switchInput = _switch.querySelector('input');

		expect(switchInput?.checked).toBe(true);
	});

	it('should be disabled', () => {
		renderWithRevKitThemeProvider(() => (
			<Switch disabled />
		));

		const _switch = screen.getByTestId('switch');
		const switchInput = _switch.querySelector('input');

		expect(switchInput?.disabled).toBe(true);
	});
});