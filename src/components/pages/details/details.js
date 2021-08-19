import React, { useState ,useEffect } from 'react';
import axios from '../../../services/api';
import './details.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee4';

const Details = ({ articleDetails: { title, author, publishedAt, description, url, urlToImage, content } }) => {
	const [data, setData] = useState([{}]);

	const request = async () => {
		try {
			const response = await axios.get(`/everything?q=${title}&apiKey=${API_KEY}&page${1}&pageSize=${1}`);
			setData(response.data.articles);
			console.log('req1');
		} catch {

		} finally {

		}
		console.log('req2');
	};

	useEffect(() => {
		request();
		console.log('useeffect');
	}, [data]);

	return (
		<div className="details">
			<h3 className="details__title">
				{data[0].title}
			</h3>
			<img className="details__img" src={data[0].urlToImage} alt={data[0].title} />
			<p className="details__content">
				{data[0].content}
			</p>
			<div className="details__description">
				<a className="details__link" href={data[0].url} target="_blank">
					Go to the official news source
				</a>
				<div className="details__author-wrapp">
					<a className="details__author">Author: {data[0].author}</a>
					<p className="details__data-published">Published: {data[0].publishedAt}</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
