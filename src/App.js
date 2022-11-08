import { h } from 'preact';
import { Router } from 'preact-router';
import baseName from './baseName';
import Redirect from './components/redirect';

import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';

const App = () => {
	return (
		<div id="app">
			<Header />
			<Router>
				<Home path={`${baseName}/`} />
				<About path={`${baseName}/about`} />
				<Redirect path={`${baseName}/redirect/:to`} />
				<Redirect default to="/" />
			</Router>
		</div>
	)
}

export default App;
