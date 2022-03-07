import { render } from 'solid-testing-library';
import { JSX } from 'solid-js';
import { RevKitTheme } from '../components/themeProvider/ThemeProvider';

export const renderWithRevKitThemeProvider = (callback: () => JSX.Element) => render(() => <RevKitTheme>{callback}</RevKitTheme>);