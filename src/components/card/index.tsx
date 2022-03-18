import { GenericCard, GenerircCardProps } from './generic-card';
import { FillCard, FillCardProps } from './fill-card';

const Card = Object.assign({}, {
	Fill: FillCard,
	Generic: GenericCard
});

export { Card };
export type { GenerircCardProps, FillCardProps };