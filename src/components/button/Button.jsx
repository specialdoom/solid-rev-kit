export function Button(props) {
	return (
		<button
			className={`rev-btn`}
			classList={{
				'rev-btn-small': props.small,
				'rev-btn-secondary': props.secondary,
				'rev-btn-ghost': props.ghost
			}}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}