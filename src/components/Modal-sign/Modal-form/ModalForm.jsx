import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap'

function ModalForm(props) {

	let handleSub = (values) => {
		console.log(values);
	};

	return (
		<form onSubmit={props.handleSubmit(handleSub)}>
			<div className="mb-3">
				<label className="form-label">Адрес электронной почты</label>
				<Field className="form-control" name="login" component="input" type="email" />
				<div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
			</div>
			<div className="mb-3">
				<label className="form-label">Пароль</label>
				<Field className="form-control" name="password" component="input" type="password" />
			</div>
			<Button type="submit" className="btn btn-succes">Войти</Button>
		</form>
	)
}

export default reduxForm({ form: 'login' })(ModalForm)
