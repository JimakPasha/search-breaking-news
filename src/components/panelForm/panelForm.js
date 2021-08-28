import React, { useState } from 'react';
import './panelForm.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getNews, inputSearch } from '../../redux/actions';

function PanelForm() {
	const [searchValue, setSearchValue] = useState('');
	const [sortBy, setSortBy] = useState('publishedAt');
	const [pageSize, setPageSize] = useState('10');
	const [page, setPage] = useState('1');

	const loading = useSelector((state) => state.search.loading);
	const pages = useSelector((state) => state.search.pages);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getNews(searchValue, sortBy, pageSize, page));
		dispatch(inputSearch(searchValue));
	};

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
	};

	return (
		<>
			<form className="search-panel" onSubmit={handleSubmit}>
				<div className="search-panel__top">
					<label className="search-panel__label" htmlFor="search-panel__input">
						<input
							className="search-panel__input"
							id="search-panel__input"
							type="text"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					</label>
					<button className="search-panel__btn" type="submit">
						{loading ? 'Loading' : 'Search'}
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
							<span className="sort__btn" data-testid="test-btn">Relevancy</span>
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
									className="page__input"
									id="page__input"
									type="text"
									value={page}
									onChange={handleChange}
								/>
								<span>из {pages}</span>
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
		</>
	);
}

export default PanelForm;
