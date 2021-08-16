import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from '../header/header';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Details from '../pages/details/details';
import ErrorPage from '../pages/errorPage/errorPage';
import Footer from '../footer/footer';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<main className="main">
					<div className="container">
						<PagesAll />
					</div>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

const PagesAll = () => {
	const location = useLocation();
	const [ppp2, setPpp2] = useState({});

	return (
		<div className="pages">
			<TransitionGroup>
				<CSSTransition timeout={300} classNames="page" key={location.key}>
					<Switch location={location}>
						<Route exact path="/">
							<Home setPpp2={setPpp2} />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/details">
							<Details ppp2={ppp2} />
						</Route>
						<Route path="/error">
							<ErrorPage />
						</Route>
						<Redirect to="/error">
							<ErrorPage />
						</Redirect>
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default App;
