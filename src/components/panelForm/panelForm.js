import React, { useEffect, useState } from 'react';
import Loading from '../loading/loading';
import Error from '../error/error';
import axios from '../../services/api';
import './panelForm.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee4';

function PanelForm({ setData, setLoading }) {
	const [searchValue, setSearchValue] = useState('');
	const [sortBy, setSortBy] = useState('publishedAt');
	const [pageSize, setPageSize] = useState('10');
	const [pageAll, setPageAll] = useState(0);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setPageSize(pageSize);
		setPage(page);
		setLoading(isLoading);
	}, [pageSize, page, isLoading, setLoading]);

	useEffect(() => {
		if (pageAll && page) {
			setIsLoading(true);
			setIsError(false);
			const getData = async () => {
				try {
					const response = await axios.get(
						`/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`
					);
					setData(response.data.articles);
					setPageAll(Math.ceil(response.data.totalResults / pageSize));
				} catch {
					setIsError(true);
					setData([]);
				} finally {
					setIsLoading(false);
				}
			};
			getData();
		}
	}, [sortBy, pageSize, page]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setIsError(false);
		try {
			const response = await axios.get(
				`/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`
			);
			setData(response.data.articles);
			setPageAll(Math.ceil(response.data.totalResults / pageSize));
		} catch {
			setIsError(true);
			setData([]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (e) => {
		const { value } = e.target;
		const regexp = /(?!0+$)\d+/;
		const matchedValue = value.match(regexp);
		if (matchedValue) {
			const newValue = +matchedValue[0];
			setPage(newValue);
		} else {
			setPage('');
		}
	};

	document.querySelector('body').style.overflow = isLoading ? 'hidden' : 'auto';
	const showLoading = isLoading ? <Loading /> : null;
	const showError = isError ? <Error /> : null;

	return (
		<>
			<form
				className={
					showLoading ? 'search-panel search-panel__loading' : 'search-panel'
				}
				onSubmit={handleSubmit}
			>
				<div className="search-panel__top">
					<label className="search-panel__label" htmlFor="search-panel__input">
						<input
							className="search-panel__input"
							id="search-panel__input"
							type="text"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							disabled={isLoading}
						/>
					</label>
					<button
						className="search-panel__btn"
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? 'Loading' : 'Search'}
					</button>
					<div className="sort search-panel__sort">
						<label className="sort__label" htmlFor="sort__input-publishedAt">
							<input
								className="sort__input"
								id="sort__input-publishedAt"
								type="radio"
								checked={sortBy === 'publishedAt'}
								value="publishedAt"
								onChange={(e) => setSortBy(e.target.value)}
							/>
							<span className="sort__btn">Date published</span>
						</label>
						<label className="sort__label" htmlFor="sort__input-popularity">
							<input
								className="sort__input"
								id="sort__input-popularity"
								type="radio"
								checked={sortBy === 'popularity'}
								value="popularity"
								onChange={(e) => setSortBy(e.target.value)}
							/>
							<span className="sort__btn">Popularity</span>
						</label>
						<label className="sort__label" htmlFor="sort__input-relevancy">
							<input
								className="sort__input"
								id="sort__input-relevancy"
								type="radio"
								checked={sortBy === 'relevancy'}
								value="relevancy"
								onChange={(e) => setSortBy(e.target.value)}
							/>
							<span className="sort__btn">Relevancy</span>
						</label>
					</div>
				</div>
				<div className="search-panel__bottom">
					<div className="page search-panel__page">
						<label
							className="page__label page__label-pageAll"
							htmlFor="page__input"
						>
							<span className="page__descr">Pages all</span>
							<div>
								<input
									className={
										page ? 'page__input' : 'page__input page__input--empty'
									}
									id="page__input"
									type="number"
									min="1"
									value={page}
									onChange={handleChange}
								/>
								<span>из {pageAll}</span>
							</div>
						</label>
						<label
							className="page__label page__label-pageSize"
							htmlFor="page__select"
						>
							<span className="page__descr">News on page</span>
							<select
								className="page__select"
								id="page__select"
								value={pageSize}
								onChange={(e) => setPageSize(e.target.value)}
								onBlur={(e) => setPageSize(e.target.value)}
							>
								<option>3</option>
								<option>5</option>
								<option>10</option>
								<option>15</option>
								<option>20</option>
								<option>25</option>
								<option>30</option>
							</select>
						</label>
					</div>
				</div>
			</form>
			{showLoading}
			{showError}
		</>
	);
}

export default PanelForm;
