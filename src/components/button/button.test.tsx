import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { ButtonType, Button } from './button';

const buttonVariants: ButtonType[] = ['accent', 'bright', 'ghost'];

describe('Button', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <Button>Button</Button>);

		const button = screen.getByTestId('button');

		expect(button).toBeInTheDocument();
	});

	it('should render <button> element', () => {
		renderWithRevKitThemeProvider(() => <Button>Button</Button>);

		const button = screen.getByTestId('button');

		expect(button).toBeInstanceOf(HTMLButtonElement);
	});

	it('should render accent variant button by default', () => {
		renderWithRevKitThemeProvider(() => <Button>Button</Button>);

		const button = screen.getByTestId('button');

		expect(button).toHaveAttribute('variant', 'accent');
	});

	it('should render small button', () => {
		renderWithRevKitThemeProvider(() => <Button small>Button</Button>);

		const button = screen.getByTestId('button');

		expect(button).toHaveAttribute('small');
	});

	it('should render disabled button', () => {
		renderWithRevKitThemeProvider(() => <Button disabled>Button</Button>);

		const button = screen.getByTestId('button');

		expect(button).toHaveAttribute('disabled');
	});

	buttonVariants.forEach(variant => {
		it(`should render ${variant} variant button`, () => {
			renderWithRevKitThemeProvider(() => <Button variant={variant}>Button</Button>);

			const button = screen.getByTestId('button');

			expect(button).toHaveAttribute('variant', variant);
		});
	});

	it('should fire onClick event handler', () => {
		jest.spyOn(window, 'alert').mockImplementation(() => { });

		const onClickHandler = () => alert('something');
		renderWithRevKitThemeProvider(() => <Button onClick={onClickHandler}>Button</Button>);

		const button = screen.getByTestId('button');
		button.click();

		expect(window.alert).toHaveBeenCalled();
	});

	it('should render children', () => {
		const children = 'Children';
		renderWithRevKitThemeProvider(() => <Button>{children}</Button>);

		const button = screen.getByTestId('button');

		expect(button).toHaveTextContent(children);
	});
});