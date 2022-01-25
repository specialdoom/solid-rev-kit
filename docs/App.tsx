import { render } from 'solid-js/web';
import { RevKitTheme } from '..';
import { Container } from './Container';
import { Legend } from './Legend';
import branding from '../assets/images/branding.svg';
import { ColorsSection } from './sections/ColorsSection';
import { AvatarsSection } from './sections/AvatarsSection';
import { TypeScaleSection } from './sections/TypeScaleSection';
import { IconsSection } from './sections/IconsSection';
import { CardsSection } from './sections/CardsContainer';
import { ButtonsSection } from './sections/ButtonsSection';
import { AlertsSection } from './sections/AlertsSection';
import { SpinnerSection } from './sections/SpinnersSection';
import { CalloutsSection } from './sections/CalloutsSection';

const App = () => {
  return (
    <div style={{ height: '80%' }}>
      <Container type='full' padding='0'>
        <img src={branding} alt='RevkitUI' width='100%' />
      </Container>
      <Legend title="Typeface" rank={1} />
      <Legend title="Colors" rank={2} />
      <ColorsSection />
      <Legend title="Icons" rank={3} />
      <IconsSection />
      <Legend title="Buttons" rank={4} />
      <ButtonsSection />
      <Legend title="Avatars" rank={5} />
      <AvatarsSection />
      <Legend title="Type Scale" rank={6} />
      <TypeScaleSection />
      <Legend title="Cards" rank={7} />
      <CardsSection />
      <Legend title="Alerts" rank={8} />
      <AlertsSection />
      <Legend title="Spinners" rank={9} />
      <SpinnerSection />
      <Legend title="Callouts" rank={9} />
      <CalloutsSection />
    </div>
  );
};

render(() => <RevKitTheme><App /></RevKitTheme>, document.getElementById('root') as HTMLElement);
