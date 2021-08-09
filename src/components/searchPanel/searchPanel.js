import React, { useState } from 'react';
import axios from '../../services/api';
import './searchPanel.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee4';

function SearchPanel({ setData }) {
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [sortBy, setSortBy] = useState('publishedAt');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.get(`/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}`);
			setData(response.data.articles);
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<form className="search-panel" onSubmit={handleSubmit}>
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
			<div className="sort">
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
		</form>
	);
}

export default SearchPanel;