import { For } from 'solid-js';
import { Colors } from '../../../src/components/themeProvider/theme';
import { Heading, Label } from '../../../src/components/typography';
import { ColorCard } from '../components/ColorCard';
import { Container } from '../Container';

const colors = [
	{
		backgroundColor: '#0880AE',
		label: 'accent',
		labelType: 'bright',
		headingType: 'bright'
	},
	{
		backgroundColor: '#F2AC57',
		label: 'warning',
		labelType: 'bright',
		headingType: 'bright'
	},
	{
		backgroundColor: '#14A38B',
		label: 'success',
		labelType: 'bright',
		headingType: 'bright'
	},
	{
		backgroundColor: '#FF7171',
		label: 'error',
		labelType: 'bright',
		headingType: 'bright'
	},
	{
		backgroundColor: '#2C2738',
		color: '#ffffff',
		label: 'primary',
		labelType: 'bright',
		headingType: 'bright'
	},
	{
		backgroundColor: '#FFFFFF',
		label: 'bright',
		labelType: 'primary',
		headingType: 'primary'
	},
	{
		backgroundColor: '#DBE2EA',
		color: '#2C2738',
		label: 'shade',
		labelType: 'primary',
		headingType: 'primary'
	},
	{
		backgroundColor: '#EBF4F8',
		label: 'tint',
		labelType: 'primary',
		headingType: 'primary'
	}
];

export const ColorsSection = () => (
	<Container type='fluid' flex flexWrap='wrap' gap='8px' justifyContent='space-evenly'>
		<For each={colors}>
			{
				color => (
					<ColorCard
						backgroundColor={color.backgroundColor}
					>
						<Label type={color.labelType as (keyof Colors)}>
							{color.label}
						</Label>
						<Heading size={4} type={color.headingType as (keyof Colors)}>{color.backgroundColor}</Heading>
					</ColorCard>
				)
			}
		</For>
	</Container>
);