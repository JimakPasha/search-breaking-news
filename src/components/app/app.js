import React from 'react';
import SearchBar from '../searchBar/searchBar';
import Cards from '../cards/cards';
import './app.scss';
import './reset.scss';
import './global.scss';

function App() {
	return (
		<div className="app">
			<SearchBar />
			<Cards />
		</div>
	);
}

export default App;
