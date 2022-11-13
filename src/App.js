import { h } from 'preact';
import { Router } from 'preact-router';
import Match from 'preact-router/match';
import { createHashHistory } from 'history';
import baseName from './util/baseName';

import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';

const history = createHashHistory();

const App = () => {
	const pushFormattedUrl = () => {
		if (window?.location?.hash.startsWith(`#${baseName}`)) {
			const pagePath = window.location.hash.replace(`#`, '');
			window.history.pushState(null, null, pagePath)
		}
	}
	return (
		<div id='app'>
			<Match>
				{({ matches, path, url }) => {
					pushFormattedUrl();
					return null;
				}}
			</Match>
			<Header />
			<Router history={history}>
				<About path={`${baseName}/about`} />
				<Home default />
			</Router>
		</div>
	)
}

export default App;
