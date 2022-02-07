import { Component, createSignal, For, onCleanup, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Icons } from '../icons';

const { ChevronLeft, ChevronDown } = Icons;

export interface SelectProps {
	options: string[];
	placeholder?: string;
	selected?: string;
	onSelect?: (option: string) => void;
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

		&.selected {
			border: 2px solid ${props => props.theme.colors.accent};
		}
	}
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
`;

const OptionListItem = styled('div')`
	height: 44px;
	text-align: left;
	padding: 12px 15px;

	&:hover {
		background: ${props => props.theme.colors.tint};
	}
`;

const clickOutside = (el: any, accessor: any) => {
	const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
	document.body.addEventListener("click", onClick);

	onCleanup(() => document.body.removeEventListener("click", onClick));
}

export const Select: Component<SelectProps> = ({ options = ['test'], placeholder = 'Select', selected }) => {
	const [getOpen, setOpen] = createSignal(false);
	const [getSelectedOption, setSelectedOption] = createSignal(selected)

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option);
		setOpen(false);
	}

	return (
		<SelectContainer>
			<div
				onClick={() => setOpen(v => !v)}
				className="select"
				classList={{ 'selected': getOpen() }}
				//@ts-ignore
				use:clickOutside={() => setOpen(false)}
			>
				<Show when={getSelectedOption()} fallback={() => <>{placeholder}</>}>
					{getSelectedOption()}
				</Show>
				<Show
					when={getOpen()}
					fallback={() => <ChevronLeft />}
				>
					<ChevronDown />
				</Show>
			</div>
			<Show when={getOpen()}>
				<OptionsList>
					<For each={options}>{option => (
						<OptionListItem onClick={() => handleOptionSelect(option)}>
							{option}
						</OptionListItem>
					)}</For>
				</OptionsList>
			</Show>
		</SelectContainer>
	)
};