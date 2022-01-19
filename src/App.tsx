import { createSignal } from 'solid-js';
import { Alert } from './components/alert';

function App() {
  const [getIsModalVisible, setIsModalVisible] = createSignal(false);
  return (
    <div>
      <Alert type="accent">Test</Alert>
    </div >
  );
}

export default App;
