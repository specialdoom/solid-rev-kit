import { CloseIcon } from '../icons/close';
import { Button } from '../button/Button';
import { Space } from '../space/Space';

export function Modal(props) {
	return (
		<Show when={props.visible}>
			<div className="rev-modal">
				<div className="rev-modal-dialog">
					<div className="rev-modal-header">
						<span className="rev-modal-title">
							{props.title}
						</span>
						<CloseIcon
							scale={24}
							color="#2c2738"
							onClick={props.onCancel}
						/>
					</div>
					<div className="rev-modal-body">
						{props.children}
					</div>
					<div className="rev-modal-actions">
						<Space>
							<Button ghost onClick={props.onCancel}>Cancel</Button>
							<Button onClick={props.onOk}>Action</Button>
						</Space>
					</div>
				</div>
			</div>
		</Show>
	)
}