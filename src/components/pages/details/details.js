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
	const loading = useSelector((state) => state.search.loading);
	const error = useSelector((state) => state.search.error);

	useEffect(() => {
		dispatch(getNewsDetails(params.title));
	}, []);

	const showError = error ? <Error /> : null;
	const showloading = loading ? <Loading /> : null;
	const content = !(loading || error) ? <View /> : null;

	return (
		<>
			<div>
				{showError}
				{showloading}
				{content}
			</div>
		</>
	);
};

const View = () => {
	const news = useSelector((state) => state.search.dataDetails);
	return (
		<div className="details">
			<h3 className="details__title">{news.title}</h3>
			<img className="details__img" src={news.urlToImage} alt={news.title} />
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
	);
};

export default Details;
