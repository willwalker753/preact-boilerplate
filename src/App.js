import { h } from 'preact';
import { Router } from 'preact-router';
import baseName from './baseName';
import Redirect from './components/redirect';

import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';

const App = () => {
	// Dynamic routing, enables users to go directly to non root url paths
	// See 404.html for details
	if (typeof window !== 'undefined' && window?.location?.hash?.length > 0) {
		const pagePath = window.location.hash.replace('#!', '');
		window.location.href = baseName + pagePath;
		return null;
	}

	return (
		<div id="app">
			<Header />
			<Router>
				<Home path={`${baseName}/`} />
				<About path={`${baseName}/about`} />
				<Redirect default to="/" />
			</Router>
		</div>
	)
}

export default App;
