import React from 'react';
import './cardItem.scss';
import starImg from './star.svg';

function CardItem({
	name,
	img,
	price,
	rating,
	sold,
	store,
	storeSite,
	freeShipping,
	sail,
}) {
	const freeShippingView = freeShipping ? (
		<div className="card-item__shipping">Free Shipping</div>
	) : (
		<div className="card-item__shipping">&#0;</div>
	);
	const sailView = sail ? <div className="card-item__sail">sail</div> : null;
	return (
		<div className="card-item">
			<img
				className="card-item__img"
				src={`./assets/images/${img}.jpg`}
				alt={name}
			/>
			<div className="card-item__content">
				<h5 className="card-item__title">{name}</h5>
				<div className="card-item__wrapp">
					<div className="card-item__price">{price}$</div>
					<div className="card-item__rating">
						<img src={starImg} alt="rating" />
						{rating}
					</div>
				</div>
				{freeShippingView}
				<div className="card-item__sold">{sold} sold</div>
				<a
					className="card-item__store"
					href={storeSite}
					target="_blank"
					rel="noopener noreferrer"
				>
					{store}
				</a>
				{sailView}
			</div>
		</div>
	);
}

export default CardItem;
