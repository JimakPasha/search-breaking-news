import React from 'react';
import './card.scss';

const Card = ({ item }) => {
	return (
		<div className="card">
			<p>Name: {item.firstName}</p>
			<p>Surname: {item.lastName}</p>
			<p>Delivery date: {item.deliveryDate}</p>
			<p>Country: {item.country}</p>
		</div>
	)
}

export default Card;