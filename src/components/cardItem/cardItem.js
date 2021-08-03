import React from 'react';
import './cardItem.scss';

function CardItem({
	name,
	img,
	price,
	rating,
	sold,
	store,
	freeShipping,
	sail,
}) {
	const freeShippingView = freeShipping ? (
		<div className="card-item__shipping">Free Shipping</div>
	) : null;
	const sailView = sail ? <div className="card-item__sail">sail</div> : null;
	return (
		<div className="card-item">
			<img
				className="card-item__img"
				src="./assets/parkas-65368hd.jpg"
				alt="card"
			/>
			<div className="card-item__content">
				<h5 className="card-item__title">{name}</h5>
				<div className="card-item__wrapp">
					<div className="card-item__price">{price}$</div>
					<div className="card-item__rating">{rating}</div>
				</div>
				{freeShippingView}
				<div className="card-item__sold">{sold} sold</div>
				<a className="card-item__store" href="google.com" target="_blank">
					{store}
				</a>
				{sailView}
			</div>
		</div>
	);
}

export default CardItem;
