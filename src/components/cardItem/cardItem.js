import React from 'react';
import './cardItem.scss';
import img from './4.jpg';

function CardItem() {
	return (
		<div className="card-item">
			<img className="card-item__img" src={img} alt="card" />
			<div className="card-item__content">
				<h5 className="card-item__title">T-shirt</h5>
				<div className="card-item__wrapp">
					<div className="card-item__price">45$</div>
					<div className="card-item__rating">4.8</div>
				</div>
				<div className="card-item__shipping">Free Shipping</div>
				<div className="card-item__sold">126 sold</div>
				<a className="card-item__store" href="google.com" target="_blank">
					AIOPESON Store
				</a>
			</div>
		</div>
	);
}

export default CardItem;
