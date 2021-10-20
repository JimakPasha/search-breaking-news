import React from 'react';
import './about.scss';

const About = () => {
	return (
		<div className="about">
			<h3 className="about__title">About</h3>
			<p className="about__text">
				In this application, you can use the search bar and find the latest
				news.
			</p>
			<div className="about__peculiarities">
				<h4 className="about__peculiarities-title">
					Since api is free, there are some features:
				</h4>
				<ul className="about__peculiarities-list">
					<li className="about__peculiarities-item">
						- Works only on localhost -
					</li>
					<li className="about__peculiarities-item">
						- Returns only the first 100 news -
					</li>
					<li className="about__peculiarities-item">
						- You can make 100 requests within 12 hours -
					</li>
					<li className="about__peculiarities-item">
						- On the details-page, the content of the article is incomplete -
					</li>
				</ul>
			</div>
			<div className="about__others">
				<p className="about__text">
					This application is made by JimakPasha. My{' '}
					<a
						className="about__link"
						href="https://github.com/JimakPasha"
						target="_blank"
						rel="noreferrer"
					>
						Gihub
					</a>
					.
				</p>
				<p className="about__text">
					Thanks to{' '}
					<a
						className="about__link"
						href="https://newsapi.org/"
						target="_blank"
						rel="noreferrer"
					>
						newsapi
					</a>{' '}
					for providing the api.
				</p>
			</div>
		</div>
	);
};

export default About;
