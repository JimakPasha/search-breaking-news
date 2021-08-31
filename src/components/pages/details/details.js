import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNewsDetails } from '../../../redux/actions';
import Loading from '../../loading/loading';
import Error from '../../error/error';
import './details.scss';

const Details = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const news = useSelector((state) => state.search.dataDetails);
	const loading = useSelector((state) => state.search.loading);
	const error = useSelector((state) => state.search.error);

	useEffect(() => {
		console.log('use-eff-details');
		dispatch(getNewsDetails(params.title));
	}, []);

	return (
		<>
			<div>
				{error ? <Error /> : null}
				{loading ? <Loading /> : null}
				<div className="details">
					<h3 className="details__title">{news.title}</h3>
					<img
						className="details__img"
						src={news.urlToImage}
						alt={news.title}
					/>
					<p className="details__content">{news.content}</p>
					<div className="details__description">
						<a
							className="details__link"
							href={news.url}
							target="_blank"
							rel="noreferrer"
						>
							Go to the official news source
						</a>
						<div className="details__author-wrapp">
							<p className="details__author">Author: {news.author}</p>
							<p className="details__data-published">
								Published: {news.publishedAt}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
