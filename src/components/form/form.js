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

	useEffect(()=> {
		validate()
	}, [firstName, lastName, deliveryDate, country, checkAgree])

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
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.keys(errors).length === 0) {
			setFormValues((state) => [...state, { firstName, lastName, deliveryDate, country, checkAgree, checkNotice }]);
			reset();
			alert('Data saved successfully!')
		} else {
			alert('Fill in all the required fields please!')
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