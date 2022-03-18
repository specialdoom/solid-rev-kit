import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup, render } from 'solid-testing-library';
import { Callout } from './callout';

describe('Callout', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <Callout description='description'></Callout>);

		const callout = screen.getByTestId('callout');

		expect(callout).toBeInTheDocument();
	})

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => <Callout description='description'></Callout>);

		const callout = screen.getByTestId('callout');

		expect(callout).toBeInstanceOf(HTMLDivElement);
	})

	it('should render small callout', () => {
		const description = 'description';

		renderWithRevKitThemeProvider(() => <Callout description={description} small></Callout>);

		const callout = screen.getByTestId('small-callout');

		expect(callout).toBeInTheDocument();
	})

	it('should contain actions', () => {
		renderWithRevKitThemeProvider(() => <Callout description='description' actions={[
			<button>Action</button>,
		]} />);

		const callout = screen.getByTestId('callout');
		const actionsContainer = callout.querySelector('div');

		expect(actionsContainer).toContainHTML('<button>Action</button>');
	})
});