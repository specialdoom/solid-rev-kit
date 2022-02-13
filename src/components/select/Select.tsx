import { Component, createSignal, For, onCleanup, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Icons } from '../icons';

const { ChevronLeft, ChevronDown } = Icons;

type SelectOptionValue = string;

interface SelectOption {
	label: string;
	value: SelectOptionValue;
	disabled?: boolean;
}

export interface SelectProps {
	options: SelectOption[];
	placeholder?: string;
	defaultOption?: SelectOptionValue;
	onSelect?: (option: SelectOptionValue) => void;
	onChange?: (option: SelectOptionValue) => void;
	onBlur?: (option: SelectOptionValue) => void;
	disabled?: boolean;
}

const SelectContainer = styled('div')`
	position: relative;
	user-select: none;
	outline: none;
	width: auto;
	height: auto;

	& .select {
		background: ${props => props.theme.colors.bright};
    border: 1px solid ${props => props.theme.colors.shade};
		border-radius: 6px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
		min-width: 360px;
    height: 52px;
    padding: 5px;
    box-sizing: border-box;
		padding: 16px;

		& span svg path {
			fill: ${props => props.theme.colors.accent};
		}

		&.selected {
			border: 2px solid ${props => props.theme.colors.accent};
		}

		&.disabled {
			background: ${props => props.theme.colors.shade};
			color: ${props => props.theme.colors.secondary};

			& span svg path {
				fill: ${props => props.theme.colors.secondary};
			}
		}
	}
`;

const SelectPlaceholder = styled('span')`
	color: ${props => props.theme.colors.muted};
`;

const OptionsList = styled('div')`
	position: absolute;
	top: 60px;
	display: flex;
	flex-direction: column;
	min-width: 360px;
	list-style-type: none;
	padding: 12px 0;
	border-radius: 6px;
	background: ${props => props.theme.colors.bright};
	z-index: 3;
`;

const OptionListItem = styled('div') <{
	selected?: boolean,
	disabled?: boolean
}>`
	height: 44px;
	text-align: left;
	padding: 12px 15px;
	background: ${props => props.selected ? props.theme.colors.tint : props.theme.colors.bright};

	&:hover, &.selected  {
		background: ${props => props.theme.colors.tint};
	}

	${props => props.disabled ? `
		background: ${props.theme.colors.shade};
		color: ${props.theme.colors.secondary};
		pointer-events: none;

		&:hover {
			background: ${props.theme.colors.shade};
		}
	` : ''}
`;

const clickOutside = (el: any, accessor: any) => {
	const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
	document.body.addEventListener("click", onClick);

	onCleanup(() => document.body.removeEventListener("click", onClick));
}

export const Select: Component<SelectProps> = ({
	options = [],
	placeholder,
	defaultOption,
	disabled = false,
	onSelect,
	onChange,
	onBlur
}) => {
	const [getOpen, setOpen] = createSignal(false);
	const [getSelectedOption, setSelectedOption] = createSignal(defaultOption)

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option);
		onSelect?.(option);
		onChange?.(option);
		setOpen(false);
	}

	const handleClick = () => {
		if (disabled) return;

		setOpen(v => !v);
	}

	return (
		<SelectContainer>
			<div
				onClick={handleClick}
				className="select"
				classList={{ 'selected': getOpen(), 'disabled': disabled }}
				// @ts-ignore
				use:clickOutside={() => { setOpen(false); onBlur?.(getSelectedOption()); }}
			>
				<Show when={getSelectedOption()} fallback={() => <SelectPlaceholder>{placeholder}</SelectPlaceholder>}>
					{options.find(item => item.value === getSelectedOption())?.label}
				</Show>
				<Show
					when={getOpen()}
					fallback={() => <ChevronLeft />}
				>
					<ChevronDown />
				</Show>
			</div>
			<Show when={getOpen()}>
				<OptionsList >
					<For each={options}>{option => (
						<OptionListItem
							onClick={() => {
								if (option.disabled) return;

								handleOptionSelect(option.value)
							}}
							selected={option.value === getSelectedOption()}
							disabled={option.disabled}
						>
							{option.label}
						</OptionListItem>
					)}</For>
				</OptionsList>
			</Show>
		</SelectContainer>
	);
};