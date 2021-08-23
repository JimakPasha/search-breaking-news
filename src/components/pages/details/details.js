import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../loading/loading';
import Error from '../../error/error';
import './details.scss';


const Details = () => {
	const news = useSelector((state) => state.search.dataDetails);
	const loading = useSelector((state) => state.search.loading);
	const error = useSelector((state) => state.search.error);

	return (
		<>
			<div>
				{error ? <Error /> : null}
				{loading ? <Loading /> : null}
				{news.map(({ title, urlToImage, content, url, author, publishedAt }) => {
					return (
						<div className="details">
							<h3 className="details__title">{title}</h3>
							<img
								className="details__img"
								src={urlToImage}
								alt={title}
							/>
							<p className="details__content">{content}</p>
							<div className="details__description">
								<a
									className="details__link"
									href={url}
									target="_blank"
									rel="noreferrer"
								>
									Go to the official news source
								</a>
								<div className="details__author-wrapp">
									<p className="details__author">Author: {author}</p>
									<p className="details__data-published">
										Published: {publishedAt}
									</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</>
	);
};

export default Details;
