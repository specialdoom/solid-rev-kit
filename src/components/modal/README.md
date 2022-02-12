# Modal component

### Usage

```jsx
import { Modal, Button } from '@specialdoom/solid-rev-kit';

const Container = () => {
  const [getIsModalVisible, setIsModalVisible] = createSignal(false);

  return (
    <>
      <Button variant="ghost" small onClick={() => setIsModalVisible(true)}>
        Open modal
      </Button>
      <Modal
        title="Modal Title"
        visible={getIsModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        Left aligned contextual description for modal.
      </Modal>
    </>
  );
};
```

### API

| Property | Description                  | Type              | Default   |
| -------- | ---------------------------- | ----------------- | --------- |
| title    | Title of modal component     | string            | undefined |
| visible  | Whether the modal is visible | Accessor<boolean> | false     |
| onOk     | Ok action handler            | () => void        | undefined |
| onCancel | Cancel action handler        | () => void        | undefined |
