import { Component } from 'solid-js';
import { render } from 'solid-js/web';
import { RevKitTheme } from "./src/components/theme-provider/theme-provider";
import { Button } from "./src/components/button/button";

const App: Component = () => (
	<div>
		<Button> Test </Button>
		<Button variant="ghost"> Test </Button>
		<Button variant="bright"> Test </Button>
	</div>
);

render(() => <RevKitTheme><App /></RevKitTheme>, document.getElementById('root') as HTMLElement)