import React, { useState } from 'react';
import './news.scss';

const News = ({ data }) => {

	return (
		<div className="news">
			<ul className="news__list">
				{data.map(({ title, author, publishedAt, description, url, urlToImage }, i) => {
					return (
						<li className="news__item" key={i}>
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
								<a className="news__more-link" href={url} target="_blank">more details</a>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default News;