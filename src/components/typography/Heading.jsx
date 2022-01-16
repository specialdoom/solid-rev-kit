export function Heading(props) {
	return (
		<h1
			className='rev-heading'
			classList={{
				[`rev-heading-level-${props.level}`]: true
			}}
		>
			{props.children}
		</h1>
	)
}