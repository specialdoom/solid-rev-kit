import { Alert } from './components/alert/Alert';
import { Button } from './components/button/Button';
import { Progress } from './components/progress/Progress';
import { Spinner } from './components/spinner/Spinner';
import { Tag } from './components/tag/Tag';
import { Nav } from './components/nav';
import { Logo } from './assets/Logo';
import { Card } from './components/card/Card';
import { Space } from './components/space/Space';
import { Modal } from './components/modal/Modal';
import { createSignal } from 'solid-js';
import { Counter } from './components/counter/Counter';
import { Heading } from './components/typography/Heading';
import { Paragraph } from './components/typography/Paragraph';
import { Label } from './components/typography/Label';

function App() {
  const [getIsModalVisible, setIsModalVisible] = createSignal(false);
  return (
    <div>
      {/* <Alert>A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="success">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="accent">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="warning">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="dark">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="error">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Button>Button</Button>
      <Button small>Small Button</Button>
      <Button ghost>Ghost Button</Button>
      <Button bright>Ghost Button</Button>
      <br />
      <Tag>Tag</Tag>
      <Tag type="dark">Tag</Tag>
      <Tag type="success">Tag</Tag>
      <Tag type="error">Tag</Tag>
      <Tag type="accent">Tag</Tag>
      <Tag type="warning">Tag</Tag>
      <br />
      <Progress percent={Math.random() * 100} type="accent" />
      <Progress percent={Math.random() * 100} type="error" />
      <Progress percent={Math.random() * 100} type="warning" />
      <Progress percent={Math.random() * 100} type="success" />
      <br />
      <Spinner type="accent" />
      <Spinner type="error" />
      <Spinner type="warning" />
      <Spinner type="success" /> */}

      {/* <br /> */}
      <Nav>
        <Nav.NavItem>
          <Logo />
        </Nav.NavItem>
        <Nav.NavItem>
          Item 1
        </Nav.NavItem>
        <Nav.NavItem>
          Item 2
        </Nav.NavItem>
        <Nav.NavItem right>
          <Button small>
            Action
          </Button>
        </Nav.NavItem>
      </Nav>
      {/* <Space>
        <Card
          imageSrc="https://i.ibb.co/1TTZgJ6/bg.png"
          title="Card title"
          body="Supporting description for the card goes here like a breeze."
          actions={[<Button ghost>Action</Button>]}
        />
      </Space>
      <Space>
        <Card
          title="Card title"
          body="Supporting description for the card goes here like a breeze."
          actions={[<Button ghost>Action</Button>]}
        />
      </Space> */}
      {/* <Button onClick={() => setIsModalVisible(true)}>
        Show modal
      </Button>
      <Modal
        title="Modal title"
        visible={getIsModalVisible()}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Heading level={1}>Heading x1</Heading>
      <Heading level={2}>Heading x2</Heading>
      <Heading level={3}>Heading x3</Heading>
      <Heading level={4}>Heading x4</Heading>
      <Heading level={5}>Heading x5</Heading>
      <Heading level={6}>Heading x6</Heading>

      <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab architecto voluptatibus! Vero quae, quam doloremque, molestiae laudantium maxime mollitia pariatur, eveniet officia porro impedit placeat nesciunt earum? Facilis, dignissimos.</Paragraph>
      <Paragraph small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab architecto voluptatibus! Vero quae, quam doloremque, molestiae laudantium maxime mollitia pariatur, eveniet officia porro impedit placeat nesciunt earum? Facilis, dignissimos.</Paragraph>
      <Label>Label</Label> */}
    </div >
  );
}

export default App;
