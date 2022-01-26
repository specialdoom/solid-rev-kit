import { render } from 'solid-js/web';
import { RevKitTheme } from '../src/components/themeProvider/ThemeProvider';
import { Container } from './src/Container';
import { Legend } from './src/Legend';
import branding from './src/assets/branding.svg';
import { ColorsSection } from './src/sections/ColorsSection';
import { AvatarsSection } from './src/sections/AvatarsSection';
import { TypeScaleSection } from './src/sections/TypeScaleSection';
import { IconsSection } from './src/sections/IconsSection';
import { CardsSection } from './src/sections/CardsContainer';
import { ButtonsSection } from './src/sections/ButtonsSection';
import { AlertsSection } from './src/sections/AlertsSection';
import { SpinnerSection } from './src/sections/SpinnersSection';
import { CalloutsSection } from './src/sections/CalloutsSection';

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
