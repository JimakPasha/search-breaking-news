import React from 'react';
import './details.scss';

const Details = ({ ppp2 }) => {
	console.log(ppp2.title);
	return (
		<div>
			<div>
				!!!{ppp2.title}
			</div>
		</div>
	);
};

export default Details;
