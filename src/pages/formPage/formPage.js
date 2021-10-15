import React, { useState } from 'react';
import Form from '../../components/form/form';
import CardForm from '../../components/cardForm/cardForm';
import ModalForm from '../../components/modalForm/modalForm';
import './formPage.scss';

const FormPage = () => {
	const [formValues, setFormValues] = useState([]);
	return (
		<div className="container">
			<div className="form-page">
				<h3 className="form-page__title">
					Fill out the form so we can send the latest news to you by mail
				</h3>
				<div className="form-page__wrapper">
					<Form setFormValues={setFormValues} />
					<div>
						{formValues.map((item) => {
							const id = Math.floor((Date.now() / Math.random()) * 100);
							return (
								<div key={id}>
									<ModalForm>
										Successfully! You can fill out another form
									</ModalForm>
									<CardForm item={item} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormPage;
