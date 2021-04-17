import React, { useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CartForm() {
	const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
	const [isSubmitting, setIsSubmitting] = useState(false)

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Required'),
		phone: Yup.string()
			.required('Required')
			.matches(phoneRegExp, 'Phone number is not valid'),
		address: Yup.string()
			.required('Required')
	});

	const handleCompleteOrder = (values) => {
		// this.props.checkout(values);
		console.log(values)
	};

	return (
		<>
			<div className="cartTitle">Informações Adicionais</div>
			<div className="cartFormContainer">
				<Formik
					initialValues={
						{
							name: '',
							phone: '',
							address: '',
							comment: ''
						}
					}
					validationSchema={validationSchema}
					onSubmit={handleCompleteOrder}
				>
					{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit
						}) => (
							<form onSubmit={handleSubmit}>
								<div className="field">
									<label>How we should call you</label>
									<input name="name" type="text" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
									<div className="errors">
									{touched.name && errors.name}
									</div>
								</div>
								<div className="field">
									<label>Your phone number</label>
									<input name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
									<div className="errors">
										{touched.phone && errors.phone}
									</div>
								</div>
								<div className="field">
									<label>Your Address</label>
									<textarea name="address" rows={3} onChange={handleChange} onBlur={handleBlur} value={values.address}/>
									<div className="errors">
										{touched.address && errors.address}
									</div>
								</div>
								<div className="field">
									<label>If you want to leave a comment for us, you can leave them in the box below</label>
									<textarea name="comment" rows={3} onChange={handleChange} onBlur={handleBlur} value={values.comment}/>
									<div className="errors">
										{touched.comment && errors.comment}
									</div>
								</div>
								<div className="completeOrderButtonContainer">
									<button className="blueButton" type="submit" disabled={isSubmitting}>Complete order {isSubmitting && (<div className="spinner"></div>)}</button>
								</div>
							</form>
						)}
				</Formik>
			</div>
		</>
	)
}
