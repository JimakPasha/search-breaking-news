import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../../components/form/form';
import CardForm from '../../components/cardForm/cardForm';
import ModalForm from '../../components/modalForm/modalForm';
import './formPage.scss';

const FormPage = () => {
	const [formValues, setFormValues] = useState([]);
	const modal = useSelector((state) => state.modal);

	return (
		<div className="container">
			<div className="form-page">
				<h3 className="form-page__title">
					Fill out the form so we can send the latest news to you by mail
				</h3>
				<div className="form-page__wrapper">
					<Form setFormValues={setFormValues} />
					<ul>
						{formValues.map((item) => {
							const id = Math.floor((Date.now() / Math.random()) * 100);
							return (
								<li key={id}>
									<CardForm item={item} />
								</li>
							);
						})}
						{modal && (
							<ModalForm>Successfully! You can fill out another form</ModalForm>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FormPage;
