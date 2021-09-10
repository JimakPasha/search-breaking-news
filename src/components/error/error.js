import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { reset } from '../../redux/actions';
import './error.scss';

const Error = () => {
	const dispatch = useDispatch();

	return (
		<div className="error">
			<p className="error__text">
				Oops... An unexpected error has occurred. Please try again
			</p>
			<NavLink
				className="error__btn"
				onClick={() => dispatch(reset())}
				exact
				to="/"
			>
				Ok
			</NavLink>
		</div>
	);
};

export default Error;
