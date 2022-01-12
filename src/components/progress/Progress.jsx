export function Progress(props) {
	return (
		<div className="rev-progress">
			<div
				className="rev-progress-percent"
				classList={{
					[`${props.type}`]: props.type && 'accent'
				}}
				style={{ width: props.percent + '%' }}></div>
		</div>
	);
};