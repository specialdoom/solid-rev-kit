import { cleanup, screen } from 'solid-testing-library';
import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { Space } from './space';

describe('Space', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});
	
	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<Space><div>1</div><div>2</div></Space>
		));

		const space = screen.getByTestId('space');

		expect(space).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<Space><div>1</div><div>2</div></Space>
		));

		const space = screen.getByTestId('space');

		expect(space).toBeInstanceOf(HTMLDivElement);
	});

	it('should render children with a space of 8px between them', () => {
		renderWithRevKitThemeProvider(() => (
			<Space><div style={{ width: '10px' }}>1</div><div style={{ width: '10px' }}>2</div></Space>
		));

		const space = screen.getByTestId('space');

		expect(window.getComputedStyle(space).gap).toBe('8px');
	});
});