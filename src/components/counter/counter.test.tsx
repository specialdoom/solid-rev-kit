import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Counter } from './counter';

describe('Counter', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<Counter value={1} minValue={-2} maxValue={2} />
		));

		const counter = screen.getByTestId('counter');

		expect(counter).toBeInTheDocument();
	})

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<Counter value={1} minValue={-2} maxValue={2} />
		));

		const counter = screen.getByTestId('counter');

		expect(counter).toBeInstanceOf(HTMLDivElement);
	})

	it('should render value inside input', () => {
		const value = 1;
		renderWithRevKitThemeProvider(() => (
			<Counter value={value} minValue={-2} maxValue={2} />
		));

		const counter = screen.getByTestId('counter');
		const input = counter.querySelector('input');

		expect(input?.value).toBe(value.toString());
	})

	it('should increment value inside input on plus click', () => {
		renderWithRevKitThemeProvider(() => (
			<Counter value={1} minValue={-2} maxValue={2} />
		));

		const counter = screen.getByTestId('counter');
		const plusIcon = screen.getByTestId('plus-icon');
		const input = counter.querySelector('input');

		expect(input?.value).toBe('1');
		plusIcon.click();
		expect(input?.value).toBe('2');
	})

	it('should decrement value inside input on minus click', () => {
		renderWithRevKitThemeProvider(() => (
			<Counter value={1} minValue={-2} maxValue={2} />
		));

		const counter = screen.getByTestId('counter');
		const minusIcon = screen.getByTestId('minus-icon');
		const input = counter.querySelector('input');

		expect(input?.value).toBe('1');
		minusIcon.click();
		expect(input?.value).toBe('0');
	})

	it('should disable plus button if maxValue is reached', () => {
		renderWithRevKitThemeProvider(() => (
			<Counter value={1} minValue={-2} maxValue={2} />
		));

		const counter = screen.getByTestId('counter');
		const plusIcon = screen.getByTestId('plus-icon');
		const input = counter.querySelector('input');

		expect(input?.value).toBe('1');
		plusIcon.click();
		expect(input?.value).toBe('2');
		plusIcon.click();
		expect(input?.value).toBe('2');
	})

	it('should disable minus button if minValue is reached', () => {
		renderWithRevKitThemeProvider(() => (
			<Counter value={1} minValue={-2} maxValue={2} />
		));

		const counter = screen.getByTestId('counter');
		const minusIcon = screen.getByTestId('minus-icon');
		const input = counter.querySelector('input');

		expect(input?.value).toBe('1');
		minusIcon.click();
		expect(input?.value).toBe('0');
		minusIcon.click();
		expect(input?.value).toBe('-1');
		minusIcon.click();
		expect(input?.value).toBe('-2');
		minusIcon.click();
		expect(input?.value).toBe('-2');
	})
});