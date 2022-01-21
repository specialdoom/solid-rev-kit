import { Alert } from './components/alert';
import { render } from 'solid-js/web';
import './app.css';
import { RevKitTheme } from './components/themeProvider/ThemeProvider';

function App() {
  return (
    <div>
      <Alert>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Alert>
    </div >
  );
}

render(() => <RevKitTheme><App /></RevKitTheme>, document.getElementById('root') as HTMLElement);
