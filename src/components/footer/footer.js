import React from 'react';
import './footer.scss';
import github from './github.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<a
					className="footer__link"
					href="https://github.com/JimakPasha"
					target="_blank"
					rel="noreferrer"
				>
					<img className="footer__img" src={github} alt="github" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
