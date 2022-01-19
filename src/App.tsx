import { createSignal } from 'solid-js';
import { Space } from './components/space';
import { Tag } from './components/tag';

function App() {
  const [getIsModalVisible, setIsModalVisible] = createSignal(false);
  return (
    <div>
      <Space>
        <Tag>Test</Tag>
        <Tag>Test</Tag>
      </Space>
    </div >
  );
}

export default App;
