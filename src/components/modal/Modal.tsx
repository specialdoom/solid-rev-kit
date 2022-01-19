import { CloseIcon } from '../icons/close';
import { Button } from '../button/Button';
import { Space } from '../space/Space';
import { Component, Show } from 'solid-js';

export interface ModalProps {
	visible: boolean;
	title: string;
	onCancel: () => void;
	onOk: () => void;
}

export const Modal: Component<ModalProps> = ({ visible, title, onOk, onCancel, children }) => {
	return (
		<Show when={visible}>
			<div className="rev-modal">
				<div className="rev-modal-dialog">
					<div className="rev-modal-header">
						<span className="rev-modal-title">
							{title}
						</span>
						<CloseIcon
							scale={24}
							color="#2c2738"
							onClick={onCancel}
						/>
					</div>
					<div className="rev-modal-body">
						{children}
					</div>
					<div className="rev-modal-actions">
						<Space>
							<Button ghost onClick={onCancel}>Cancel</Button>
							<Button onClick={onOk}>Action</Button>
						</Space>
					</div>
				</div>
			</div>
		</Show>
	)
}