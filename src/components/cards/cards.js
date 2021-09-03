import React from 'react';
import CardItem from '../cardItem/cardItem';
import './cards.scss';

function Cards({ posts }) {
	const elements = posts.map((item) => {
		const {
			name,
			img,
			price,
			rating,
			sold,
			store,
			storeSite,
			freeShipping,
			sail,
			id,
		} = item;
		return (
			<CardItem
				key={id}
				name={name}
				img={img}
				price={price}
				rating={rating}
				sold={sold}
				store={store}
				storeSite={storeSite}
				freeShipping={freeShipping}
				sail={sail}
			/>
		);
	});
	return <div className="cards">{elements}</div>;
}

export default Cards;
