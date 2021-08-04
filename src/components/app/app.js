import React, { useState } from 'react';
import Form from '../form/form';
import Card from '../card/card';
import './app.scss';
import './reset.scss';
import './global.scss';

const App = () => {
	const [formValues, setFormValues] = useState([]);
	return (
		<div className="container">
			<div className="form-wrapper">
				<Form setFormValues={setFormValues}/>
				<div>
					{formValues.map((item, i) => {
						return <Card item={item} key={i}/>
					})}
				</div>
			</div>
		</div>
	)
}

export default App;
