import React, { useState, useEffect } from 'react';
import Loading from '../../loading/loading';
import axios from '../../../services/api';
import {
	useLocation,
	useParams,
	Link,
} from 'react-router-dom';
import './details.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee4';

const Details = () => {
	const params = useParams();
	const [data, setData] = useState([]);
	const [isloading, setIsLoading] = useState(true);
	const [news, setNews] = useState();

	const request = async () => {
		try {
			const response = await axios.get(
				`/everything?q=${params.title}&apiKey=${API_KEY}`
			);
			setData(response.data.articles);
		} catch {
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		const index = data.findIndex((news) => news.title === params.title);
		const newsOne = data[index];
		setNews(newsOne);
	}, [data]);


	const view = () => {
		return (
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
		);
	};

	return <div>{isloading ? <Loading /> : view()}</div>
};

export default Details;
