import { Component } from 'solid-js'

export interface HeadingProps {
	level: number;
}

export const Heading: Component<HeadingProps> = ({ level, children }) => {
	return (
		<h1
			className='rev-heading'
			classList={{
				[`rev-heading-level-${level}`]: true
			}}
		>
			{children}
		</h1>
	)
}