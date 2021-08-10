import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import './searchPanel.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee4';

function SearchPanel({ setData }) {
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [sortBy, setSortBy] = useState('publishedAt');
	const [pageSize, setPageSize] = useState('10');
	const [pageAll, setPageAll] = useState('0');
	const [page, setPage] = useState('1');

	useEffect(() => {
		setPageSize(pageSize);
		setPage(page);
	}, [pageSize, page])

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.get(`/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`);
			setData(response.data.articles);
			setPageAll(Math.ceil(response.data.totalResults / pageSize));
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
		}
	}

	const handleChange = (e) => {
		const { value } = e.target;
		const regexp = /\d+/;
		const matchedValue = value.match(regexp);
		if (matchedValue) {
			const newValue = +matchedValue[0];
			setPage(newValue);
		} else {
			setPage('');
		}
	}

	return (
		<>
			<form className="search-panel" onSubmit={handleSubmit}>
				<div className="search-panel__top">
					<label className="search-panel__label">
						<input
							className="search-panel__input"
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
						<label className="sort__label">
							<input
								className="sort__input"
								type="radio"
								checked={sortBy === 'publishedAt'}
								value="publishedAt"
								onChange={(e) => setSortBy(e.target.value)}
							/>
							<span className="sort__btn">Date published</span>
						</label>
						<label className="sort__label">
							<input
								className="sort__input"
								type="radio"
								checked={sortBy === 'popularity'}
								value="popularity"
								onChange={(e) => setSortBy(e.target.value)}
							/>
							<span className="sort__btn">Popularity</span>
						</label>
						<label className="sort__label">
							<input
								className="sort__input"
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
						<label className="page__label page__label-pageAll">
							<span className="page__descr">Pages all</span>
							<div>
								<input
									className="page__input"
									type="text"
									value={page}
									onChange={handleChange}
								/>
								<span>из {pageAll}</span>
							</div>

						</label>
						<label className="page__label page__label-pageSize">
							<span className="page__descr">News on page</span>
							<select
								className="page__select"
								value={pageSize}
								onChange={(e) => setPageSize(e.target.value)}
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
		</>
	);
}

export default SearchPanel;