import { h } from 'preact';
import { Router } from 'preact-router';
import baseroute from './baseroute';
import Redirect from './components/redirect';

import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';

const App = () => {
	// Dynamic routing, enables users to go directly to non root url paths
	// See 404.html for details
	if (window?.location?.hash?.length > 0) {
		window.location.href = window.location.hash.replace('#!', '');
	}

	return (
		<div id="app">
			<Header />
			<Router>
				<Home path={`${baseroute}/`} />
				<About path={`${baseroute}/about`} />
				<Redirect default to="/" />
			</Router>
		</div>
	)
}

export default App;
