import React, { Component } from 'react';
import './form.scss';

export const Form = ({ setFormValues }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log();
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="firstName"></label>
		</form>
	)
}
