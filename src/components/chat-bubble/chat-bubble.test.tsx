import { renderWithRevKitThemeProvider } from '../../utils/test-utils';
import { screen, cleanup } from 'solid-testing-library';
import { ChatBubble, ChatBubbleType } from './chat-bubble';

const chatBubbleTypes: ChatBubbleType[] = ['blueberry', 'bright', 'dark', 'strawberry'];

describe('ChatBubble', () => {
	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render', () => {
		renderWithRevKitThemeProvider(() => <ChatBubble>Chat message</ChatBubble>);

		const chatBubble = screen.getByTestId('chat-bubble');

		expect(chatBubble).toBeInTheDocument();
	});

	it('should render a <div> element', () => {
		renderWithRevKitThemeProvider(() => <ChatBubble>Chat message</ChatBubble>);

		const chatBubble = screen.getByTestId('chat-bubble');

		expect(chatBubble).toBeInstanceOf(HTMLDivElement);
	});

	it('should render chat message as children', () => {
		const children = 'Chat message';
		renderWithRevKitThemeProvider(() => <ChatBubble>{children}</ChatBubble>);

		const chatBubble = screen.getByTestId('chat-bubble');

		expect(chatBubble).toHaveTextContent(children);
	});

	chatBubbleTypes.forEach(type => {
		it(`should render ${type} type alert`, () => {
			renderWithRevKitThemeProvider(() => <ChatBubble type={type}>Chat message</ChatBubble>);

			const chatBubble = screen.getByTestId('chat-bubble');

			expect(chatBubble).toHaveAttribute('type', type);
		});
	});

	it('should have placement attribue', () => {
		const placement = 'top-left';

		renderWithRevKitThemeProvider(() => <ChatBubble placement={placement}>Chat message</ChatBubble>);

		const chatBubble = screen.getByTestId('chat-bubble');

		expect(chatBubble).toHaveAttribute('placement', placement);
	})
});