import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { Modal } from './modal';
import { createSignal } from 'solid-js';

describe('Modal', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		const [getIsModalVisible] = createSignal(true);
		renderWithRevKitThemeProvider(() => (
			<Modal
				title="Modal Title"
				visible={getIsModalVisible}
				onOk={() => alert('ok')}
				onCancel={() => alert('cancel')}
			>
				Left aligned contextual description for modal.
			</Modal>
		));

		const modal = screen.getByTestId('modal');

		expect(modal).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		const [getIsModalVisible] = createSignal(true);
		renderWithRevKitThemeProvider(() => (
			<Modal
				title="Modal Title"
				visible={getIsModalVisible}
				onOk={() => alert('ok')}
				onCancel={() => alert('cancel')}
			>
				Left aligned contextual description for modal.
			</Modal>
		));

		const modal = screen.getByTestId('modal');

		expect(modal).toBeInstanceOf(HTMLDivElement);
	})

	it('should call onOk and onCancel callbacks', () => {
		const [getIsModalVisible] = createSignal(true);
		jest.spyOn(window, 'alert').mockImplementation(() => { });
		renderWithRevKitThemeProvider(() => (
			<Modal
				title="Modal Title"
				visible={getIsModalVisible}
				onOk={() => alert('ok')}
				onCancel={() => alert('cancel')}
			>
				Left aligned contextual description for modal.
			</Modal>
		));

		const modal = screen.getByTestId('modal');
		const buttons = modal.querySelectorAll('button');

		buttons.forEach(button => {
			button.click();
			expect(window.alert).toHaveBeenCalled();
		})
	})
});