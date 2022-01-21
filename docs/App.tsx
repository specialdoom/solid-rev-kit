import { render } from 'solid-js/web';
import { RevKitTheme } from '..';
import { Container } from './Container';
import { Legend } from './Legend';
import branding from '../assets/images/branding.svg';

const App = () => (
  <div>
    <Container type='full'>
      <img src={branding} alt='RevkitUI' width='100%' />
    </Container>
    <Legend title="Typeface" rank={1} />
    <Legend title="Colors" rank={2} />
    <Legend title="Icons" rank={3} />
    <Legend title="Avatars" rank={4} />
    <Legend title="Type Scale" rank={5} />
    <Legend title="Modals" rank={6} />
    <Legend title="Callouts" rank={7} />
    <Legend title="Cards" rank={8} />
  </div >
);

render(() => <RevKitTheme><App /></RevKitTheme>, document.getElementById('root') as HTMLElement);
