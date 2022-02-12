import { GenericCard, GenerircCardProps } from './GenericCard';
import { FillCard, FillCardProps } from './FillCard';

const Card = Object.assign({}, {
	Fill: FillCard,
	Generic: GenericCard
});

export { Card };
export type { GenerircCardProps, FillCardProps };