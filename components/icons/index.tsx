import { styled } from 'solid-styled-components';
import { IconProps, RevIcon } from './icons';

export type { IconProps };

const Icon = styled('span')`
	height: 20px;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Plus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Plus fill={fill} /></Icon>;
export const Cross = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Cross fill={fill} /></Icon>;
export const Minus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Minus fill={fill} /></Icon>;
export const More = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.More fill={fill} /></Icon>;
export const Burger = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick}><RevIcon.Burger fill={fill} /></Icon>;