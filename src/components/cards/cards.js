import React from 'react';
import CardItem from '../cardItem/cardItem';
import './cards.scss';

function Cards() {
	return (
		<div className="cards">
			<CardItem />
			<CardItem />
			<CardItem />
			<CardItem />
		</div>
	);
}

export default Cards;
