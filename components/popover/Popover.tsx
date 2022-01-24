import { BasePlacement, createPopper, Instance } from '@popperjs/core';
import { Component, createEffect, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Paragraph } from '../typography';

interface PopoverProps {
	placement?: BasePlacement;
	title: string;
	description: string;
}

const StyledTooltip = styled('div')`
	width: 180px;
	height: 90px;
	border-radius: 8px;
	background-color: ${props => props.theme.colors.primary};
	color: white;
	padding: 16px;
	display: none;

	&[data-show] {
		display: block;
	}
`;

const getArrow = (placement: BasePlacement) => {
	if (placement.includes('bottom')) return `top: -8px`;
	if (placement.includes('top')) return `bottom: -8px`;
	if (placement.includes('left')) return `right: -8px`;
	if (placement.includes('right')) return `left: -8px`;
}

const StyledArrow = styled('div') <{
	placement: BasePlacement;
}>`
	position: absolute;
	width: 20px;
	height: 20px;
	background: inherit;
	visibility: hidden;
	${props => getArrow(props.placement)};

	&::before {
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 4px;
		background: inherit;
		visibility: visible;
		content: '';
		transform: rotate(45deg);
	}
`;

export const Popover: Component<PopoverProps> = ({ children, placement = 'bottom', title, description }) => {
	let slotRef: any;
	let tooltipRef: any;
	let arrowRef: any;
	let [getPopperInstance, setPopperInstance] = createSignal<Instance>();

	createEffect(() => {
		setPopperInstance(createPopper(slotRef, tooltipRef, {
			placement: placement,
			modifiers: [
				{
					name: 'arrow',
					options: {
						element: arrowRef,
					},
				},
				{
					name: 'offset',
					options: {
						offset: [0, 10],
					},
				},
			],
		}));
	})

	const show = () => {
		const popperInstance = getPopperInstance();
		if (tooltipRef && popperInstance) {
			tooltipRef.setAttribute('data-show', '');
			popperInstance.update();
		}
	}

	const remove = () => {
		if (tooltipRef) {
			tooltipRef.removeAttribute('data-show', '');
		}
	}

	return (
		<>
			<span ref={slotRef} onMouseEnter={() => show()} onFocus={() => show()} onMouseLeave={() => remove()} onBlur={() => remove()}>
				{children}
			</span>
			<StyledTooltip ref={tooltipRef} role="tooltip">
				<Paragraph size={2} weight='bold' type='bright'>{title}</Paragraph>
				<Paragraph size={2} type='bright'>{description}</Paragraph>
				<StyledArrow ref={arrowRef} placement={placement}></StyledArrow>
			</StyledTooltip>
		</>
	);
};