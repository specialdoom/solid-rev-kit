import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Progress } from './progress';

describe('Progress', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<Progress type="accent" percent={20} />
		));

		const progress = screen.getByTestId('progress');

		expect(progress).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<Progress type="accent" percent={20} />
		));

		const progress = screen.getByTestId('progress');

		expect(progress).toBeInstanceOf(HTMLDivElement);
	});

	it('should have type attribute', () => {
		const type = 'accent';
		renderWithRevKitThemeProvider(() => (
			<Progress type={type} percent={20} />
		));

		const progress = screen.getByTestId('progress');

		expect(progress).toHaveAttribute('type', type);
	});

	it('should be loading', () => {
		renderWithRevKitThemeProvider(() => (
			<Progress loading />
		));

		const progress = screen.getByTestId('progress');

		expect(progress).toHaveAttribute('loading', 'true');
	});

	it('should have percent attribute', () => {
		const percent = 20;
		renderWithRevKitThemeProvider(() => (
			<Progress percent={percent} />
		));

		const progress = screen.getByTestId('progress');

		expect(progress).toHaveAttribute('percent', '20');
	});
});