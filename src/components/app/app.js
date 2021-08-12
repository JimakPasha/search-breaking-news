import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import ErrorPage from '../pages/errorPage/errorPage';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	return (
		<div className="container">
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">about</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/error">
						<ErrorPage />
					</Route>
					<Redirect to="/error" />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
