import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './news.scss';

const News = ({ data, loading, setPpp }) => {
	const [lll, setLll] = useState({});
	useEffect(() => {
		setPpp(lll);
	}, [lll]);
	return (
		<div className={loading ? 'news news__loading' : 'news'}>
			<ul className="news__list">
				{data.map(
					({ title, author, publishedAt, description, url, urlToImage }) => {
						const id =
							parseInt(url.replace(/\D+/g, '')) + Math.floor(Date.now());
						return (
							<li className="news__item" key={id}>
								<h3 className="news__title">{title}</h3>
								<div className="news__img-descr-wrapp">
									<img className="news__img" src={urlToImage} alt={title} />
									<p className="news__descr">{description}</p>
								</div>
								<div className="news__author-link-wrapp">
									<div className="news__author-wrapp">
										<p className="news__author">{author}</p>
										<p className="news__data-published">{publishedAt}</p>
									</div>
									<NavLink className="news__more-link" to="/details" onClick={() => setLll({ title })}>
										more details
									</NavLink>
								</div>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
};

export default News;
