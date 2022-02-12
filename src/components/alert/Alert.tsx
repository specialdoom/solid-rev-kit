import { Component, createSignal, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Icons } from '../icons';
import { Colors } from '../themeProvider/theme';
import { Typography } from '../typography';

const { Cross } = Icons;

type AlertType = 'accent' | 'success' | 'warning' | 'error' | 'dark' | 'bright';

export interface AlertProps {
	type?: AlertType
	color?: keyof Colors
}

const StyledAlert = styled('div') <{
	type: AlertType,
	color: keyof Colors
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
	color: ${props => props.theme.colors[props.color]};
  font-weight: 400;
	gap: 8px;

	& svg {
		cursor: pointer;

		& path {
			fill: ${props => props.theme.colors[props.color]};
		}
	}
`;

export const Alert: Component<AlertProps> = ({
	type = 'accent',
	color = 'bright',
	children
}) => {
	const [getClosed, setClosed] = createSignal(false);

	return (
		<Show when={!getClosed()}>
			<StyledAlert type={type} color={color}>
				<Typography.Paragraph type={color}>{children}</Typography.Paragraph>
				<Cross onClick={() => setClosed(true)} />
			</StyledAlert>
		</Show >
	);
};