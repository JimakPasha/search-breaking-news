import React, { useEffect } from 'react';
import axios from '../../../services/api';
import './details.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee4';

const Details = ({ articleDetails: { title, author, publishedAt, description, url, urlToImage, content } }) => {
	// useEffect(() => {
	// 	const request = async () => {
	// 		const response =  await axios.get(`/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`)
	// 		return response;
	// 	};
	// });
	return (
		<div className="details">
			<h3 className="details__title">
				{title}
			</h3>
			<img className="details__img" src={urlToImage} alt={title} />
			<p className="details__content">
				{content}
			</p>
			<div className="details__description">
				<a className="details__link" href={url} target="_blank">
					Go to the official news source
				</a>
				<div className="details__author-wrapp">
					<a className="details__author">Author: {author}</a>
					<p className="details__data-published">Published: {publishedAt}</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
