export function Spinner(props) {
	return (
		<div
			className='rev-spinner'
			classList={{
				[props.type]: props.type
			}}
		></div>
	);
};