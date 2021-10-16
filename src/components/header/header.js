import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import newsLogo from './newsLogo.png';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<NavLink className="header__logo" exact to="/">
						<img className="header__logo-img" src={newsLogo} alt="news" />
					</NavLink>
					<nav className="header__menu">
						<ul className="header__menu-list">
							<li className="header__menu-item">
								<NavLink activeClassName="header__link-active" exact to="/">
									Home
								</NavLink>
							</li>
							<li className="header__menu-item">
								<NavLink
									activeClassName="header__link-active"
									to="/subscription"
								>
									Subscription
								</NavLink>
							</li>
							<li className="header__menu-item">
								<NavLink activeClassName="header__link-active" to="/about">
									About
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
