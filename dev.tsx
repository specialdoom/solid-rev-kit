import { Component } from 'solid-js';
import { render } from 'solid-js/web';

const App: Component = () => (
	<div>
		app
	</div>
);

render(() => <App />, document.getElementById('root') as HTMLElement)