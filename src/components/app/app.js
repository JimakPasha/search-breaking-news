import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/header';
import Home from '../pages/home/home';
import About from '../pages/about/about';
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
					</div>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
