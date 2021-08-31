import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import Header from '../header/header';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Details from '../pages/details/details';
import ErrorPage from '../pages/errorPage/errorPage';
// import Footer from '../footer/footer';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	const loading = useSelector((state) => state.search.loading);
	return (
		<Router>
			<div className={loading ? 'app__loading' : 'app'}>
				<Header />
				<main className="main">
					<div className="container">
						<PagesAll />
					</div>
				</main>
				{/* <Footer /> */}
			</div>
		</Router>
	);
};

const PagesAll = () => {
	const location = useLocation();

	return (
		<div className="pages">
			<TransitionGroup>
				<CSSTransition timeout={300} classNames="page" key={location.key}>
					<Switch location={location}>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route path="/details/:title">
							<Details />
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
