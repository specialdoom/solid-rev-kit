import { JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';
import { IconProps, RevIcon } from './icons';

export type { IconProps };

export type IconElement = (props: IconProps) => JSXElement;

const Icon = styled('span')`
	height: 20px;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Plus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='plus-icon'><RevIcon.Plus fill={fill} /></Icon>;
const Cross = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='cross-icon'><RevIcon.Cross fill={fill} /></Icon>;
const Minus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='minus-icon'><RevIcon.Minus fill={fill} /></Icon>;
const More = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='more-icon'><RevIcon.More fill={fill} /></Icon>;
const Burger = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='burger-icon'><RevIcon.Burger fill={fill} /></Icon>;
const Lens = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='lens-icon'><RevIcon.Lens fill={fill} /></Icon>;
const Circle = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='circle-icon'><RevIcon.Circle fill={fill} /></Icon>;
const ChevronLeft = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='chevronLeft-icon'><RevIcon.ChevronLeft fill={fill} /></Icon>;
const ChevronDown = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='chevronDown-icon'><RevIcon.ChevronDown fill={fill} /></Icon>;
const Share = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='share-icon'><RevIcon.Share fill={fill} /></Icon>;
const Heart = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='heart-icon'><RevIcon.Heart fill={fill} /></Icon>;

export const Icons = Object.assign({}, {
	Burger,
	ChevronLeft,
	ChevronDown,
	Circle,
	Cross,
	Heart,
	Lens,
	Minus,
	More,
	Plus,
	Share
});