import React, { useState, useEffect } from 'react';
import './form.scss';

const Form = ({ setFormValues }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [deliveryDate, setDeliveryDate] = useState('');
	const [country, setCountry] = useState('');
	const [checkAgree, setCheckAgree] = useState(false);
	const [radioNotice, setRadioNotice] = useState('Receive');
	const [errors, setErrors] = useState({});

	const validate = () => {
		setErrors({});
		if (firstName === '') {
			setErrors((state) => ({ ...state, firstName }));
		}
		if (lastName === '') {
			setErrors((state) => ({ ...state, lastName }));
		}
		if (email === '') {
			setErrors((state) => ({ ...state, email }));
		}
		if (deliveryDate === '') {
			setErrors((state) => ({ ...state, deliveryDate }));
		}
		if (country === '') {
			setErrors((state) => ({ ...state, country }));
		}
		if (!checkAgree) {
			setErrors((state) => ({ ...state, checkAgree }));
		}
	};

	useEffect(() => {
		validate();
	}, [firstName, lastName, email, deliveryDate, country, checkAgree]);

	const reset = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setDeliveryDate('');
		setCountry('');
		setCheckAgree(false);
		setRadioNotice('Receive');
		setErrors('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.keys(errors).length === 0) {
			setFormValues((state) => [
				...state,
				{
					firstName,
					lastName,
					email,
					deliveryDate,
					country,
					checkAgree,
					radioNotice,
				},
			]);
			reset();
		}
	};

	const getTodayDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0');
		const yyyy = today.getFullYear();
		return `${yyyy}-${mm}-${dd}`;
	};

	const getMaxDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 2).padStart(2, '0');
		const yyyy = today.getFullYear();
		return `${yyyy}-${mm}-${dd}`;
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="firstName">
				<p>
					Name:{' '}
					{errors?.firstName === '' && (
						<span className="erorr-validate">*name should be fill</span>
					)}
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
					Surname:{' '}
					{errors?.lastName === '' && (
						<span className="erorr-validate">*surname should be fill</span>
					)}
				</p>
				<input
					className="form__input"
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</label>
			<label htmlFor="email">
				<p>
					Email:{' '}
					{errors?.email === '' && (
						<span className="erorr-validate">*email should be fill</span>
					)}
				</p>
				<input
					className="form__input"
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label htmlFor="deliveryDate">
				<p>
					Delivery date:{' '}
					{errors?.deliveryDate === '' && (
						<span className="erorr-validate">*date should be fill</span>
					)}
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
					Country:{' '}
					{errors?.country === '' && (
						<span className="erorr-validate">*country should be fill</span>
					)}
				</p>
				<select
					className="form__select"
					name="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					onBlur={(e) => setCountry(e.target.value)}
				>
					<option />
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
				<p className="form__check-text">
					I agree to have my personal data processed{' '}
					{errors?.checkAgree !== undefined && (
						<span className="erorr-validate">*agree should be check</span>
					)}
				</p>
				<input
					className="form__input form__input-check"
					id="checkAgree"
					type="checkbox"
					name="checkAgree"
					checked={checkAgree}
					onChange={() => setCheckAgree((prev) => !prev)}
				/>
			</label>
			<div className="switcher">
				<p className="switcher__text">
					Receive notifications about promotions?
				</p>
				<div className="switcher__box">
					<label className="switcher__label" htmlFor="radioNoticeReceive">
						<span className="switcher__label-text switcher__label-text--yes">
							Yes
						</span>
						<input
							className="switcher__input switcher__input--receive"
							id="radioNoticeReceive"
							type="radio"
							name="radioNoticeReceive"
							checked={radioNotice === 'Receive'}
							value="Receive"
							onChange={(e) => {
								setRadioNotice(e.target.value);
							}}
						/>
						<span className="switcher__btn" />
					</label>
					<label className="switcher__label" htmlFor="radioNoticeNoReceive">
						<span className="switcher__label-text switcher__label-text--no">
							No
						</span>
						<input
							className="switcher__input switcher__input--noreceive"
							id="radioNoticeNoReceive"
							type="radio"
							name="radioNoticeNoReceive"
							checked={radioNotice === 'NoReceive'}
							value="NoReceive"
							onChange={(e) => {
								setRadioNotice(e.target.value);
							}}
						/>
						<span className="switcher__btn" />
					</label>
				</div>
			</div>
			<div>
				<input
					className="form__input form__input-button"
					type="submit"
					value="Send"
				/>
			</div>
		</form>
	);
};

export default Form;
