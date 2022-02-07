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

const Plus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Plus fill={fill} /></Icon>;
const Cross = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Cross fill={fill} /></Icon>;
const Minus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Minus fill={fill} /></Icon>;
const More = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.More fill={fill} /></Icon>;
const Burger = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Burger fill={fill} /></Icon>;
const Lens = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Lens fill={fill} /></Icon>;
const Circle = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Circle fill={fill} /></Icon>;
const ChevronLeft = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.ChevronLeft fill={fill} /></Icon>;
const ChevronDown = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.ChevronDown fill={fill} /></Icon>;

export const Icons = Object.assign({}, {
	Plus,
	Cross,
	Minus,
	More,
	Burger,
	Lens,
	Circle,
	ChevronLeft,
	ChevronDown
});