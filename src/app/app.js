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
import Header from '../components/header/header';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import FormPage from '../pages/formPage/formPage';
import Details from '../pages/details/details';
import ErrorPage from '../pages/errorPage/errorPage';
import Footer from '../components/footer/footer';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	const loading = useSelector((state) => state.search.loading);
	const modal = useSelector((state) => state.modal);

	const setClassApp = () => {
		if (loading) {
			return ' load';
		}
		if (modal) {
			return ' modal';
		}
		return '';
	};

	return (
		<Router>
			<div className={`app${setClassApp()}`}>
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
						<Route exact path="/subscription">
							<FormPage />
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
