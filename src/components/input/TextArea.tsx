import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { BaseInputProps } from '.';

export interface TextAreaProps extends BaseInputProps {
	rows?: number;
}

const StyledTextArea = styled('textarea')`
	outline: unset;
	background: ${props => props.theme.colors.bright};
	border: 1px solid ${props => props.theme.colors.shade};
	font-size: 16px;
	padding: 16px;
	border-radius: 6px;
	height: fit-content;
	min-width: 360px;

	&:focus {
		outline: unset;
		border: 2px solid ${props => props.theme.colors.accent};
	}

	&::placeholder {
		color: ${props => props.theme.colors.muted};
	}

	&:disabled, &:disabled::placeholder {
		color: ${props => props.theme.colors.secondary};
		background: ${props => props.theme.colors.shade};
	}
`;

export const TextArea: Component<TextAreaProps> = ({ rows = 4, ...rest }) => (
	<StyledTextArea
		rows={rows}
		{...rest}
	/>
);