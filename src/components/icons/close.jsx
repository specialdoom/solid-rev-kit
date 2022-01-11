export function CloseIcon(props) {
	return (
		<svg width={props.scale} height={props.scale} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L13.5858 15L8.29289 20.2929C7.90237 20.6834 7.90237 21.3166 8.29289 21.7071C8.68342 22.0976 9.31658 22.0976 9.70711 21.7071L15 16.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.4142 15L21.7071 9.70711C22.0976 9.31658 22.0976 8.68342 21.7071 8.29289C21.3166 7.90237 20.6834 7.90237 20.2929 8.29289L15 13.5858L9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289Z" fill={props.color} />
			<mask id="mask0_0_610" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="14" height="14">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L13.5858 15L8.29289 20.2929C7.90237 20.6834 7.90237 21.3166 8.29289 21.7071C8.68342 22.0976 9.31658 22.0976 9.70711 21.7071L15 16.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.4142 15L21.7071 9.70711C22.0976 9.31658 22.0976 8.68342 21.7071 8.29289C21.3166 7.90237 20.6834 7.90237 20.2929 8.29289L15 13.5858L9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289Z" fill="white" />
			</mask>
			<g mask="url(#mask0_0_610)">
				<rect width="30" height="30" fill={props.color} />
			</g>
		</svg>
	);
};
