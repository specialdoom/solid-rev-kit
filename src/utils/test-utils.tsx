import { render } from 'solid-testing-library';
import { JSXElement } from 'solid-js';
import { RevKitTheme } from '../components/theme-provider/theme-provider';

export const renderWithRevKitThemeProvider = (callback: () => JSXElement) => render(() => <RevKitTheme>{callback}</RevKitTheme>);
