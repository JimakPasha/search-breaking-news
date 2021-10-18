import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions';
import './form.scss';

const Form = ({ setFormValues }) => {
	const getTodayDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0');
		const yyyy = today.getFullYear();
		return `${yyyy}-${mm}-${dd}`;
	};

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [dateReceive, setDateReceive] = useState(getTodayDate());
	const [country, setCountry] = useState('');
	const [theme, setTheme] = useState('All');
	const [checkAgree, setCheckAgree] = useState(false);
	const [radioNotice, setRadioNotice] = useState('Receive');
	const [errors, setErrors] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		setErrors({});
		if (firstName === '') {
			setErrors((state) => ({ ...state, firstName }));
		}
		if (email === '') {
			setErrors((state) => ({ ...state, email }));
		}
		if (country === '') {
			setErrors((state) => ({ ...state, country }));
		}
		if (!checkAgree) {
			setErrors((state) => ({ ...state, checkAgree }));
		}
	}, [firstName, lastName, email, country, theme, checkAgree]);

	const reset = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setDateReceive(getTodayDate());
		setCountry('');
		setTheme('All');
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
					dateReceive,
					country,
					theme,
					checkAgree,
					radioNotice,
				},
			]);
			reset();
			dispatch(openModal());
		}
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
				<p>Surname:</p>
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
			<label htmlFor="dateReceive">
				<p>Receive news from:</p>
				<input
					className="form__input"
					type="date"
					min={getTodayDate()}
					max={getMaxDate()}
					name="dateReceive"
					value={dateReceive}
					onChange={(e) => setDateReceive(e.target.value)}
				/>
			</label>
			<label htmlFor="country">
				<p>
					Your country:{' '}
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
					<option>USA</option>
					<option>China</option>
					<option>Japan</option>
					<option>Russia</option>
					<option>Canada</option>
					<option>Switzerland</option>
					<option>Norway</option>
					<option>New Zealand</option>
					<option>Other</option>
				</select>
			</label>
			<label htmlFor="theme">
				<p>Interesting themes:</p>
				<select
					className="form__select"
					name="theme"
					value={theme}
					onChange={(e) => setTheme(e.target.value)}
					onBlur={(e) => setTheme(e.target.value)}
				>
					<option>All</option>
					<option>Politics</option>
					<option>Technologies</option>
					<option>Business</option>
					<option>The science</option>
					<option>Medicine</option>
					<option>IT</option>
					<option>Travell</option>
					<option>Art</option>
					<option>Sport</option>
					<option>Nature</option>
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
					Do you receive news mainly from your country?
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
