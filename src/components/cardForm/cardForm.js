import React from 'react';
import './cardForm.scss';

const CardForm = ({ item }) => {
	return (
		<div className="card">
			<p>Name: {item.firstName}</p>
			<p>Surname: {item.lastName ? item.lastName : '-'}</p>
			<p>Email: {item.email}</p>
			<p>Receive news from: {item.dateReceive}</p>
			<p>Country: {item.country}</p>
			<p>Theme: {item.theme}</p>
		</div>
	);
};

export default CardForm;
