import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Tag, TagType } from './tag';

const tagTypes: TagType[] = ['accent', 'success', 'warning', 'error', 'dark', 'bright'];

describe('Tag', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <Tag>test</Tag>);

		const tag = screen.getByTestId('tag');

		expect(tag).toBeInTheDocument();
	});

	it('should render a <span> element', () => {
		renderWithRevKitThemeProvider(() => <Tag>test</Tag>);

		const tag = screen.getByTestId('tag');

		expect(tag).toBeInstanceOf(HTMLSpanElement);
	});

	it('should have color attribute', () => {
		renderWithRevKitThemeProvider(() => <Tag>test</Tag>);

		const tag = screen.getByTestId('tag');

		expect(tag).toHaveAttribute('color');
	});

	tagTypes.forEach(type => {
		it(`should render ${type} tag component`, () => {
			renderWithRevKitThemeProvider(() => <Tag type={type}>test</Tag>);

			const tag = screen.getByTestId('tag');

			expect(tag).toHaveAttribute('type', type);
		});
	});

	it('should close on cross icon click when closable', () => {
		renderWithRevKitThemeProvider(() => <Tag closable>test</Tag>);

		const tag = screen.getByTestId('tag');
		const crossIcon = screen.getByTestId('cross-icon');

		expect(tag).toBeInTheDocument();
		crossIcon.click();
		expect(tag).not.toBeInTheDocument();
	});
});