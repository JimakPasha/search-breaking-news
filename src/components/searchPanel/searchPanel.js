import React, { useState } from 'react';
import axios from '../../services/api';
import './searchPanel.scss';

const API_KEY = '75ef4b8ac70542e0901bc9c8663c8ee4';

function SearchPanel({ setData }) {
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.get(`/everything?q=${searchValue}&apiKey=${API_KEY}`);
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
		</form>
	);
}

export default SearchPanel;