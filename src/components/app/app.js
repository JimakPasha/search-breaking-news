import React, { useState } from 'react';
import Form from '../form/form';
import Card from '../card/card';
import Modal from '../modal/modal';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	const [formValues, setFormValues] = useState([]);
	return (
		<div className="container">
			<div className="form-wrapper">
				<Form setFormValues={setFormValues} />
				<div>
					{formValues.map((item) => {
						const id = Math.floor((Date.now() / Math.random()) * 100);
						return (
							<div>
								<Modal>Thank you! Data saved successfully!</Modal>
								<Card item={item} key={id} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default App;
