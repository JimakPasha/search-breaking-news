import React from 'react';
import './error.scss';

const Error = () => {
	return (
		<div className="error">
			<p className="error__text">
				Oops... An unexpected error has occurred. Please reload the page and try again
			</p>
			<button
				className="error__btn"
				onClick={() => window.location.reload()}
			>
				Reload
			</button>
		</div>
	)
}

export default Error;