import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.scss';

const Error = () => {
	return (
		<div className="error">
			<p className="error__text">
				Oops... An unexpected error has occurred. Please reload the page and try
				again
			</p>
			<NavLink className="error__btn" exact to="/">
				Ok
			</NavLink>
		</div>
	);
};

export default Error;
