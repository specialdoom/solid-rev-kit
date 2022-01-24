import { For } from 'solid-js'
import { ColorCard } from '../components/card'
import { Container } from './Container'

const colors = [
	{
		backgroundColor: '#0880AE',
		color: '#ffffff',
		label: 'accent'
	},
	{
		backgroundColor: '#F2AC57',
		color: '#ffffff',
		label: 'warning'
	},
	{
		backgroundColor: '#14A38B',
		color: '#ffffff',
		label: 'success'
	},
	{
		backgroundColor: '#FF7171',
		color: '#ffffff',
		label: 'error'
	},
	{
		backgroundColor: '#2C2738',
		color: '#ffffff',
		label: 'primary'
	},
	{
		backgroundColor: '#FFFFFF',
		color: '#2C2738',
		label: 'bright'
	},
	{
		backgroundColor: '#DBE2EA',
		color: '#2C2738',
		label: 'shade'
	},
	{
		backgroundColor: '#EBF4F8',
		color: '#2C2738',
		label: 'tint'
	}
]

export const Colors = () => (
	<Container type='fluid' flex flexWrap='wrap' gap='8px' justifyContent='space-evenly'>
		<For each={colors}>
			{
				color => (
					<ColorCard
						color={color.color}
						backgroundColor={color.backgroundColor}
						title={color.color}
						label={color.label}
					/>
				)
			}
		</For>
	</Container>
)