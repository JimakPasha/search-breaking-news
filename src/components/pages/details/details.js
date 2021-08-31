import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../../loading/loading';
import Error from '../../error/error';
import axios from '../../../services/api';
import './details.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee40';

const Details = () => {
	const params = useParams();
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [news, setNews] = useState();

	const request = async () => {
		try {
			const response = await axios.get(
				`/everything?q=${params.title}&apiKey=${API_KEY}`
			);
			setData(response.data.articles);
		} catch {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		const index = data.findIndex((newsOne) => newsOne.title === params.title);
		const newsOne = data[index];
		setNews(newsOne);
	}, [data]);

	const showError = isError ? <Error /> : null;
	const showloading = isLoading ? <Loading /> : null;
	const content = !(isLoading || isError) ? <View news={news} /> : null;

	return (
		<div className="details">
			{showError}
			{showloading}
			{content}
		</div>
	);
};

const View = ({ news }) => {
	return (
		<>
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
			<div className="details__back-home-wrapper">
				<Link className="details__back-home" exact to="/">
					Back to Search
				</Link>
			</div>
		</>
	);
};

export default Details;
