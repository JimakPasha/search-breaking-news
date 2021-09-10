import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__menu">
					<ul className="header__menu-list">
						<li className="header__menu-item">
							<NavLink activeClassName="header__link-active" exact to="/">
								Home
							</NavLink>
						</li>
						<li className="header__menu-item">
							<NavLink activeClassName="header__link-active" to="/about">
								about
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
