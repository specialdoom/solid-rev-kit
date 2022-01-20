import { createSignal } from 'solid-js';
import { Button } from './components/button';

function App() {
  const [getIsModalVisible, setIsModalVisible] = createSignal(true);
  return (
    <div>
      <Button>Test</Button>
      <Button variant='bright'>Test</Button>
      <Button variant='ghost'>Test</Button>
      <Button small>Test</Button>
      <Button variant='bright' small>Test</Button>
      <Button variant='ghost' small>Test</Button>
      <Button disabled>Test</Button>
      <Button variant='bright' disabled>Test</Button>
      <Button variant='ghost' disabled>Test</Button>
    </div >
  );
}

export default App;
