import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/actions';
import './error.scss';

const Error = () => {
	const dispatch = useDispatch();

	return (
		<div className="error">
			<p className="error__text">
				Oops... An unexpected error has occurred. Please try again
			</p>
			<button
				type="button"
				className="error__btn"
				onClick={() => dispatch(reset())}
			>
				Ok
			</button>
		</div>
	);
};

export default Error;
