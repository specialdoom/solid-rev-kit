import { Alert } from './components/alert';
import { Button } from './components/button';
import { Callout } from './components/callout';

function App() {
  return (
    <div>
      <Callout
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        actions={[
          <Button small>Action</Button>,
          <Button variant="ghost" small>Cancel</Button>
        ]}
        small
      />
      <Callout
        title='Callout title'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        actions={[
          <Button small>Action</Button>,
          <Button variant="ghost" small>Cancel</Button>
        ]}
      />
    </div >
  );
}

export default App;
