import { h } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';
import baseName from './util/baseName';

import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';

const App = () => {
	return (
		<div id="app">
			<Header />
			<Router history={createHashHistory()}>
				<About path={`${baseName}/about`} />
				<Home default />
			</Router>
		</div>
	)
}

export default App;
