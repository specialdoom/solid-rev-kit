import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup, render } from 'solid-testing-library';
import { FillCard } from './fill-card';

describe('FillCard', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<FillCard background="#0880AE" label="Label" title="Card title" data-testid='fill-card'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</FillCard>
		));

		const fillCard = screen.getByTestId('fill-card');

		expect(fillCard).toBeInTheDocument();
	})

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<FillCard background="#0880AE" label="Label" title="Card title" data-testid='fill-card'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</FillCard>
		));

		const fillCard = screen.getByTestId('fill-card');

		expect(fillCard).toBeInstanceOf(HTMLDivElement);
	})

	it('should have background and color', () => {
		renderWithRevKitThemeProvider(() => (
			<FillCard background='#0880AE' label="Label" title="Card title" data-testid='fill-card'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</FillCard>
		));

		const fillCard = screen.getByTestId('fill-card');

		expect(fillCard).toHaveAttribute('background');
		expect(fillCard).toHaveAttribute('color');
	})

	it('should render more icons if there are actions', () => {
		renderWithRevKitThemeProvider(() => (
			<FillCard background='#0880AE' label="Label" title="Card title" data-testid='fill-card' actions={[
				{
					label: 'Share',
					onClick: () => alert('share'),
				}
			]}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</FillCard>
		));

		const moreIcon = screen.getByTitle('more icon');

		expect(moreIcon).toBeInTheDocument();
	})

	it('should render small', () => {
		renderWithRevKitThemeProvider(() => (
			<FillCard background="#0880AE" label="Label" title="Card title" small data-testid='fill-card'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</FillCard>
		));

		const fillCard = screen.getByTestId('fill-card');

		expect(fillCard).toHaveAttribute('small');
	})
});