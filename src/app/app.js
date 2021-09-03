import React, { Component } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import Cards from '../components/cards/cards';
import products from '../products';
import './app.scss';
import './reset.scss';
import './global.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: products };
	}

	render() {
		const { data } = this.state;

		return (
			<div className="app">
				<div className="container">
					<SearchBar />
					<Cards posts={data} />
				</div>
			</div>
		);
	}
}
