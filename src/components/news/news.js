import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getNewsDetails } from '../../redux/actions';
import Loading from '../loading/loading';
import Error from '../error/error';
import './news.scss';

const News = () => {
	const dispatch = useDispatch();
	const news = useSelector((state) => state.search.data);
	const loading = useSelector((state) => state.search.loading);
	const error = useSelector((state) => state.search.error);

	return (
		<>
			{error ? <Error /> : null}
			{loading ? <Loading /> : null}
			<div className="news">
				<ul className="news__list">
					{news.map(
						({
							title,
							author,
							publishedAt,
							description,
							url,
							urlToImage,
							content,
						}) => {
							const id = Math.floor(Date.now()) + Math.floor(Math.random() * 10);
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
										<NavLink
											className="news__more-link"
											to={`/details/:${title}`}
											onClick={() => dispatch(getNewsDetails(title))}
										>
										more details
									</NavLink>
									</div>
								</li>
							);
						}
					)}
				</ul>
			</div>
		</>
	);
};

export default News;
