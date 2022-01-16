export function Paragraph(props) {
	return (
		<p
			className='rev-paragraph'
			classList={{ small: props.small }}
		>
			{props.children}
		</p>
	)
}