import { Component, createSignal, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Cross } from '../icons';
import { Colors } from '../themeProvider/theme';
import { Paragraph } from '../typography';

export interface AlertProps {
	type?: keyof Colors;
	textColor?: keyof Colors;
	iconColor?: string;
}

const StyledAlert = styled('div') <{
	type: keyof Colors;
	textColor: keyof Colors;
}>`
	background-color: ${(props) => props.theme.colors[props.type]};
	box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 24px;
  border-radius: 10px;
	color: ${props => props.theme.colors[props.textColor]};
  font-weight: 400;
	gap: 8px;

	& svg {
		cursor: pointer;
	}
`;

export const Alert: Component<AlertProps> = ({
	type = 'bright',
	textColor = 'bright',
	iconColor = '#ffffff',
	children
}) => {
	const [getClosed, setClosed] = createSignal(false);

	return (
		<Show when={!getClosed()}>
			<StyledAlert type={type} textColor={textColor} >
				<Paragraph type={textColor}>{children}</Paragraph>
				<Cross fill={iconColor} onClick={() => setClosed(true)} />
			</StyledAlert>
		</Show >
	);
};