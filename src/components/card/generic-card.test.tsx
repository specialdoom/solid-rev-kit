import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { GenericCard } from './generic-card';

describe('GenericCard', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<GenericCard
				imageSrc='image_source'
				title='Card title'
				actions={[<button>Action</button>]}
				data-testid='generic-card'
			>
				Supporting description for the card goes here like a breeze.
			</GenericCard>
		));

		const genericCard = screen.getByTestId('generic-card');

		expect(genericCard).toBeInTheDocument();
	})

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<GenericCard
				imageSrc='image_source'
				title='Card title'
				actions={[<button>Action</button>]}
				data-testid='generic-card'
			>
				Supporting description for the card goes here like a breeze.
			</GenericCard>
		));

		const genericCard = screen.getByTestId('generic-card');

		expect(genericCard).toBeInstanceOf(HTMLDivElement);
	})

	it('should render image container when imageSrc valid', () => {
		renderWithRevKitThemeProvider(() => (
			<GenericCard
				imageSrc='image_source'
				title='Card title'
				actions={[<button>Action</button>]}
				data-testid='generic-card'
			>
				Supporting description for the card goes here like a breeze.
			</GenericCard>
		));

		const genericCard = screen.getByTestId('generic-card');
		const divs = genericCard.querySelectorAll('div');

		expect(divs.length).toBe(3);
	})

	it('should not render image container when imageSrc is invalid', () => {
		renderWithRevKitThemeProvider(() => (
			<GenericCard
				title='Card title'
				actions={[<button>Action</button>]}
				data-testid='generic-card'
			>
				Supporting description for the card goes here like a breeze.
			</GenericCard>
		));

		const genericCard = screen.getByTestId('generic-card');
		const divs = genericCard.querySelectorAll('div');

		expect(divs.length).toBe(2);
	})

	it('should render title', () => {
		const title = 'Card title';
		renderWithRevKitThemeProvider(() => (
			<GenericCard
				title={title}
				actions={[<button>Action</button>]}
				data-testid='generic-card'
			>
				Supporting description for the card goes here like a breeze.
			</GenericCard>
		));

		const genericCard = screen.getByTestId('generic-card');
		const heading = genericCard.querySelector('h1');

		expect(heading?.innerHTML).toBe(title);
	})
});