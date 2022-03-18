import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup, render } from 'solid-testing-library';
import { Callout } from './callout';

describe('Callout', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <Callout description='description' data-testid='callout'></Callout>);

		const callout = screen.getByTestId('callout');

		expect(callout).toBeInTheDocument();
	})

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => <Callout description='description' data-testid='callout'></Callout>);

		const callout = screen.getByTestId('callout');

		expect(callout).toBeInstanceOf(HTMLDivElement);
	})

	it('should render small callout', () => {
		const description = 'description';

		renderWithRevKitThemeProvider(() => <Callout description={description} small data-testid='callout'></Callout>);

		const callout = screen.getByTestId('callout');

		expect(callout).not.toContainHTML(`<p>${description}</p>`);
	})

	it('should contain actions', () => {
		renderWithRevKitThemeProvider(() => <Callout description='description' actions={[
			<button>Action</button>,
		]} data-testid='callout' />);

		const callout = screen.getByTestId('callout');
		const actionsContainer = callout.querySelector('div');

		expect(actionsContainer).toContainHTML('<button>Action</button>');
	})
});