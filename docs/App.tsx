import { render } from 'solid-js/web';
import { RevKitTheme } from '..';
import { Container } from './Container';
import { Legend } from './Legend';
import branding from '../assets/images/branding.svg';
import { Colors } from './Colors';
import { Popover } from '../components/popover/Popover';

const App = () => (
  <div>
    <Container type='full' padding='0'>
      <img src={branding} alt='RevkitUI' width='100%' />
    </Container>
    <Legend title="Typeface" rank={1} />
    <Container type="fluid">
      {/* <Popover title='Popover Title' description='Supportive text for the top popover.' placement='bottom'>
        Test
      </Popover>
      <Popover title='Popover Title' description='Supportive text for the top popover.' placement='top'>
        Test
      </Popover> */}
      <Popover title='Popover Title' description='Supportive text for the top popover.' placement='top'>
        Top placement
      </Popover>
      <Popover title='Popover Title' description='Supportive text for the top popover.' placement='bottom'>
        Bottom placement
      </Popover>
      <Popover title='Popover Title' description='Supportive text for the top popover.' placement='left'>
        Left placement
      </Popover>
      <Popover title='Popover Title' description='Supportive text for the top popover.' placement='right'>
        Right placement
      </Popover>
    </Container>
    <Legend title="Colors" rank={2} />
    <Colors />
    <Legend title="Icons" rank={3} />
    <Legend title="Avatars" rank={4} />
    <Legend title="Type Scale" rank={5} />
    <Legend title="Modals" rank={6} />
    <Legend title="Callouts" rank={7} />
    <Legend title="Cards" rank={8} />
  </div>
);

render(() => <RevKitTheme><App /></RevKitTheme>, document.getElementById('root') as HTMLElement);
