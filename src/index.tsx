import { render } from 'solid-js/web';
import { ThemeProvider } from 'solid-styled-components';
import App from './App';
import './app.css';
import { theme } from '../src/components/themeProvider/theme';

render(() => <ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root') as HTMLElement);