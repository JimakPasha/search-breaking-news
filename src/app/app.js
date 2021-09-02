import React, { Component } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import Cards from '../components/cards/cards';
import './app.scss';
import './reset.scss';
import './global.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		const data = [
			{
				name: 't-short',
				img: 't-shirt-32948xd',
				price: '45',
				rating: '4.8',
				sold: '126',
				store: 'AIOPESON Store',
				storeSite: 'google.com/AIOPESON-Store',
				freeShipping: true,
				sail: true,
				id: 2143235245,
			},
			{
				name: 'shirt',
				img: 'shirt-52758la',
				price: '99',
				rating: '4.2',
				sold: '185',
				store: 'Lipswag Store',
				storeSite: 'google.com/Lipswag-Store',
				freeShipping: true,
				sail: false,
				id: 3452143453465,
			},
			{
				name: 'sweater',
				img: 'sweater-3465356dh',
				price: '129',
				rating: '3.8',
				sold: '89',
				store: 'Soochic Store',
				storeSite: 'google.com/Soochic-Store',
				freeShipping: false,
				sail: true,
				id: 5724593458111988,
			},
			{
				name: 'parkas',
				img: 'parkas-65368hd',
				price: '399',
				rating: '4.9',
				sold: '212',
				store: 'Street Knights',
				storeSite: 'google.com/Street-Knights',
				freeShipping: true,
				sail: false,
				id: 342345453242988,
			},
		];
		this.state = {
			data,
		};
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
