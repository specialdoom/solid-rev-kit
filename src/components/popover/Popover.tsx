import { Component } from "solid-js";
import tippy from 'tippy.js';

const tippyTooltip = (el: any) => {
  tippy(el, {
    content: 'My tooltip!',
  });
}

export const Popover: Component = () => (
  <span use:tippyTooltip={() => console.log('accessor')}>
    Popover
  </span>
);