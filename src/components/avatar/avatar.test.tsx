import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Avatar } from '.';

describe('Avatar', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <Avatar initials='RK' />);

		const avatar = screen.getByTestId('avatar');

		expect(avatar).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => <Avatar initials='RK' />);

		const avatar = screen.getByTestId('avatar');

		expect(avatar).toBeInstanceOf(HTMLDivElement);
	});

	it('should render round avatar', () => {
		renderWithRevKitThemeProvider(() => <Avatar initials='RK' round />);

		const avatar = screen.getByTestId('avatar');

		expect(avatar).toBeInTheDocument();
		expect(avatar).toHaveAttribute('round');
	});

	it('should render initials as children', () => {
		const initials = 'RK';

		renderWithRevKitThemeProvider(() => <Avatar initials={initials} round />);

		const avatar = screen.getByTestId('avatar');

		expect(avatar).toHaveTextContent(initials);
	});
});