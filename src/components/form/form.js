import React, { useState, useEffect } from 'react';
import SuccessMessage from '../successMessage/successMessage';
import './form.scss';

const Form = ({ setFormValues }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [deliveryDate, setDeliveryDate] = useState('');
	const [country, setCountry] = useState('');
	const [checkAgree, setCheckAgree] = useState(false);
	const [checkNotice, setCheckNotice] = useState(false);
	const [errors, setErrors] = useState({});
	const [submit, setSubmit] = useState(false);

	useEffect(() => {
		validate();
		// submitMessage();
	}, [firstName, lastName, deliveryDate, country, checkAgree, submit])

	const validate = () => {
		setErrors({});
		if (firstName === '') {
			setErrors((state) => ({ ...state, firstName }))
		}
		if (lastName === '') {
			setErrors((state) => ({ ...state, lastName }))
		}
		if (deliveryDate === '') {
			setErrors((state) => ({ ...state, deliveryDate }))
		}
		if (country === '') {
			setErrors((state) => ({ ...state, country }))
		}
		if (!checkAgree) {
			setErrors((state) => ({ ...state, checkAgree }))
		}
		if (!submit) {

		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.keys(errors).length === 0) {
			setFormValues((state) => [...state, { firstName, lastName, deliveryDate, country, checkAgree, checkNotice }]);
			// setSubmit(true);
			reset();
		}
	}

	const reset = () => {
		setFirstName('');
		setLastName('');
		setDeliveryDate('');
		setCountry('');
		setCheckAgree(false);
		setCheckNotice(false);
		setErrors('');
	}

	const getTodayDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); 
		const yyyy = today.getFullYear();
		return yyyy + '-' + mm + '-' + dd;
	}

	const getMaxDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 2).padStart(2, '0');
		const yyyy = today.getFullYear();
		return yyyy + '-' + mm + '-' + dd;
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="firstName">
				<p>
					Name: {errors?.firstName === '' && <span className="erorr-validate">*name should be fill</span>}
				</p>
				<input
					className="form__input"
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</label>
			<label htmlFor="lastName">
				<p>
					Surname: {errors?.lastName === '' && <span className="erorr-validate">*surname should be fill</span>}
				</p>
				<input
					className="form__input"
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</label>
			<label htmlFor="deliveryDate">
				<p>
					Delivery date: {errors?.deliveryDate === '' && <span className="erorr-validate">*date should be fill</span>}
				</p>
				<input
					className="form__input"
					type="date"
					min={getTodayDate()}
					max={getMaxDate()}
					name="deliveryDate"
					value={deliveryDate}
					onChange={(e) => setDeliveryDate(e.target.value)}
				/>
			</label>
			<label htmlFor="country">
				<p>
					Country: {errors?.country === '' && <span className="erorr-validate">*country should be fill</span>}
				</p>
				<select
					className="form__select"
					name="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				>
					<option></option>
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
				<p className="form__check-text">I agree to have my personal data processed {errors?.checkAgree !== undefined && <span className="erorr-validate">*agree should be check</span>}</p>
				<input
					className="form__input form__input-check"
					type="checkbox"
					name="checkAgree"
					checked={checkAgree}
					onChange={() => setCheckAgree(prev => !prev)}
				/>
			</label>
			<label className="form__label-check" htmlFor="checkNotice">
				<p className="form__check-text">Receive notifications about promotions</p>
				<input
					className="form__input form__input-check"
					type="checkbox"
					name="checkNotice"
					checked={checkNotice}
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