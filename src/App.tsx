import { createSignal } from 'solid-js';
import { Button } from './components/button';
import { Modal } from './components/modal';

function App() {
  const [getIsModalVisible, setIsModalVisible] = createSignal(true);
  return (
    <div>
      <Modal
        title="Modal title"
        visible={getIsModalVisible()}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati adipisci a eius, reiciendis magnam natus molestias soluta consectetur dolorum. Voluptatem soluta recusandae maiores dolores rerum repudiandae rem ducimus labore?e
      </Modal>
    </div >
  );
}

export default App;
