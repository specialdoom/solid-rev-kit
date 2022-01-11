import { Alert } from './components/alert/Alert';

function App() {
  return (
    <div style={{ width: '800px' }}>
      <Alert>A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="success">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="accent">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="warning">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="dark">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
      <Alert type="error">A dark alert flash for bright backgrounds, which never lose the contrast.</Alert>
    </div>
  );
}

export default App;
