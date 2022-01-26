import { Button } from '../button/Button';
import { Space } from '../space/Space';
import { Component, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Heading } from '../typography';
import { Cross } from '../icons';

export interface ModalProps {
	visible: boolean;
	title: string;
	onCancel: () => void;
	onOk: () => void;
}

const ModalWrap = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  overflow: auto;
  outline: 0;
`;

const ModalDialog = styled('div')`
	box-sizing: border-box;
  background: ${props => props.theme.colors.bright};
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  top: 100px;
  z-index: 6;
  max-width: 500px;
  width: auto;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 24px;
`;

const ModalHeader = styled('div')`
	display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ModalBody = styled('div')`
	padding: 8px 0;
`;

const ModalActions = styled('div')`
	width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Modal: Component<ModalProps> = ({ visible, title, onOk, onCancel, children }) => (
	<Show when={visible}>
		<ModalWrap>
			<ModalDialog>
				<ModalHeader>
					<Heading size={5} weight='bold'>{title}</Heading>
					<Cross onClick={onCancel} />
				</ModalHeader>
				<ModalBody>
					{children}
				</ModalBody>
				<ModalActions>
					<Space>
						<Button variant="ghost" onClick={onCancel}>Cancel</Button>
						<Button onClick={onOk}>Action</Button>
					</Space>
				</ModalActions>
			</ModalDialog>
		</ModalWrap>
	</Show >
);