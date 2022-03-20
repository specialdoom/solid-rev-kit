import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { DefaultAvatar, DefaultAvatarType } from './default-avatar';

const defaultAvatarTypes: DefaultAvatarType[] = ['jake', 'mili', 'meg'];

describe('Default avatar', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <DefaultAvatar data-testid='default-avatar' />);

		const defaultAvatar = screen.getByTestId('default-avatar');

		expect(defaultAvatar).toBeInTheDocument();
	});

	it('should render steven type by default', () => {
		renderWithRevKitThemeProvider(() => <DefaultAvatar data-testid='default-avatar' />);

		const defaultAvatar = screen.getByTestId('default-avatar');

		expect(defaultAvatar).toHaveAttribute('type', 'steven');
	});

	it('should render round avatar', () => {
		renderWithRevKitThemeProvider(() => <DefaultAvatar round data-testid='avatar' />);

		const defaultAvatar = screen.getByTestId('avatar');

		expect(defaultAvatar).toHaveAttribute('round');
	});


	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => <DefaultAvatar data-testid='avatar' />);

		const defaultAvatar = screen.getByTestId('avatar');

		expect(defaultAvatar).toBeInstanceOf(HTMLDivElement);
	});


	defaultAvatarTypes.forEach(type => {
		it(`should render ${type} type default avatar`, () => {
			renderWithRevKitThemeProvider(() => <DefaultAvatar data-testid='default-avatar' type={type} />);

			const defaultAvatar = screen.getByTestId('default-avatar');

			expect(defaultAvatar).toHaveAttribute('type', type);
		});
	});
});