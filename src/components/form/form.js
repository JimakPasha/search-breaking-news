import React, { useState, useEffect } from 'react';
import './form.scss';

const Form = ({ setFormValues }) => {
	const [firstName, setfirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [deliveryDate, setDeliveryDate] = useState('');
	const [country, setCountry] = useState('Belarus');
	const [checkAgree, setCheckAgree] = useState(false);
	const [checkNotice, setCheckNotice] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormValues((state) => [...state, { firstName, lastName, deliveryDate, country, checkAgree, checkNotice }]);
	}
	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="firstName">
				Name:
				<input
					className="form__input"
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => setfirstName(e.target.value)}
				/>
			</label>
			<label htmlFor="lastName">
				Surname:
				<input
					className="form__input"
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</label>
			<label htmlFor="deliveryDate">
				Delivery date:
				<input
					className="form__input"
					type="date"
					name="deliveryDate"
					value={deliveryDate}
					onChange={(e) => setDeliveryDate(e.target.value)}
				/>
			</label>
			<label htmlFor="country">
				Country:
				<select
					className="form__select"
					name="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				>
					<option>Belarus</option>
					<option>USA</option>
					<option>Canada</option>
					<option>Belgium</option>
					<option>Switzerland</option>
					<option>Norway</option>
					<option>New Zealand</option>
				</select>
			</label>
			<label className="form__label-check" htmlFor="checkAgree">
				<p className="form__check-text">I agree to have my personal data processed</p>
				<input
					className="form__input form__input-check"
					type="checkbox"
					name="checkAgree"
					value={checkAgree}
					onChange={() => setCheckAgree(prev => !prev)}
				/>
			</label>
			<label className="form__label-check" htmlFor="checkNotice">
				<p className="form__check-text">Receive notifications about promotions</p>
				<input
					className="form__input form__input-check"
					type="checkbox"
					name="checkNotice"
					value={checkNotice}
					onChange={() => setCheckNotice(prev => !prev)}
				/>
			</label>
			<div>
				<input
					className="form__input form__input-button"
					type="submit"
					value="Send"
				/>
			</div>
		</form>
	)
}

export default Form;