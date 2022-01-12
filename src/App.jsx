import { Alert } from './components/alert/Alert';
import { Button } from './components/button/Button';
import { Progress } from './components/progress/Progress';
import { Spinner } from './components/spinner/Spinner';
import { Tag } from './components/tag/Tag';

function App() {
  return (
    <div style={{ width: '800px' }}>
      <Alert>A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
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
      <Spinner type="success" />

    </div>
  );
}

export default App;
