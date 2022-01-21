import { Component } from 'solid-js';
import { styled } from 'solid-styled-components'
import { Space } from '../components/space';
import { Heading } from '../components/typography';

interface LegendProps {
	title: string;
	rank: number;
}

const StyledLegend = styled('div')`
	margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.shade};
  margin-top: 20px;
`;

const getRank = (rank: number) => rank < 10 ? `0${rank}` : `${rank}`;

export const Legend: Component<LegendProps> = ({ title, rank }) => (
	<StyledLegend>
		<Space>
			<Heading size={5} weight='bold' type='shade'>
				{getRank(rank)}.
			</Heading>
			<Heading size={5} weight='bold'>
				{title}
			</Heading>
		</Space>
	</StyledLegend>
)