export function Button(props) {
	return (
		<button
			className={`rev-btn`}
			classList={{
				'rev-btn-small': props.small,
				'rev-btn-bright': props.bright,
				'rev-btn-ghost': props.ghost
			}}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}