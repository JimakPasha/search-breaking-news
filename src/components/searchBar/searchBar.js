import React from 'react';
import './searchBar.scss';

function SearchBar() {
	return (
		<div className="search-panel">
			<input className="search-panel__input" type="text" />
			<button className="search-panel__btn" type="submit">
				Search
			</button>
		</div>
	);
}

export default SearchBar;
