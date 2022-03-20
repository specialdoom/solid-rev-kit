import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Select } from './select';

describe('Select', () => {
	const selectOptions = [
		{
			label: '🥭 Mango',
			value: 'Mango'
		},
		{
			label: '🍊 Orange',
			value: 'Orange'
		},
		{
			label: '🍎 Apple',
			value: 'Apple',
			disabled: true
		}
	];

	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => (
			<Select options={selectOptions} />
		));

		const selectContainer = screen.getByTestId('select-container');

		expect(selectContainer).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => (
			<Select options={selectOptions} />
		));

		const selectContainer = screen.getByTestId('select-container');

		expect(selectContainer).toBeInstanceOf(HTMLDivElement);
	});

	it('should render options list when click on select', () => {
		renderWithRevKitThemeProvider(() => (
			<Select options={selectOptions} />
		));

		const selectContainer = screen.getByTestId('select-container');
		const select = selectContainer.querySelector<HTMLDivElement>('.select');
		select?.click();
		const selectOptionsList = screen.getByTestId('select-options');

		expect(selectOptionsList).toBeInTheDocument();
	});

	it('should be disabled', () => {
		renderWithRevKitThemeProvider(() => (
			<Select options={selectOptions} disabled />
		));

		const selectContainer = screen.getByTestId('select-container');
		const select = selectContainer.querySelector<HTMLDivElement>('.select');

		expect(select?.classList).toContain('disabled');
	});

	it('should unrender options list when click outside', () => {
		renderWithRevKitThemeProvider(() => (
			<Select options={selectOptions} />
		));

		const selectContainer = screen.getByTestId('select-container');
		const select = selectContainer.querySelector<HTMLDivElement>('.select');
		select?.click();
		const selectOptionsList = screen.getByTestId('select-options');
		expect(selectOptionsList).toBeInTheDocument();
		document.body.click();
		expect(selectOptionsList).not.toBeInTheDocument();
	});
});