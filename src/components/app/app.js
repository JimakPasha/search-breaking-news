import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Header from '../header/header';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import ErrorPage from '../pages/errorPage/errorPage';
import Footer from '../footer/footer';
import './app.scss';
import './reset.scss';
import './global.scss';

const routes = [
	{ path: '/', Component: Home },
	{ path: '/about', Component: About },
	{ path: '/error', Component: ErrorPage },
];

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<main className="main">
					<div className="container">
						<div className="pages">
							{routes.map(({ path, Component }) => (
								<Route key={path} exact path={path}>
									{({ match }) => (
										<CSSTransition
											timeout={1000}
											classNames="page"
											unmountOnExit
											in={match != null}
										>
											<Component />
										</CSSTransition>
									)}
								</Route>
							))}
							<Redirect to="/error" />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
