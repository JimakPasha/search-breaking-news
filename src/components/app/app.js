import React, { Component } from 'react';
import SearchBar from '../searchBar/searchBar';
import Cards from '../cards/cards';
import './app.scss';
import './reset.scss';
import './global.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 't-short',
					img: 't-shirt-32948xd',
					price: '45',
					rating: '4.8',
					sold: '126',
					store: 'AIOPESON Store',
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
					store: 'VARSANOL Store',
					freeShipping: true,
					sail: false,
					id: 342345453242988,
				},
			],
		};
	}

	render() {
		const { data } = this.state;

		return (
			<div className="app">
				<SearchBar />
				<Cards posts={data} />
			</div>
		);
	}
}
