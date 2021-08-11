import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap'
import { required } from '../../Validator/Validator';

function ModalFormRegistration(props) {

	let handleSub = (values) => {
		props.addUserAcc(values)
	};

	return (
		<form onSubmit={props.handleSubmit(handleSub)}>
			<div className="mb-3">
				<label className="form-label">Адрес электронной почты</label>
				<Field validate={[required]} type="email" className="form-control" name="login" component="input" />
				<div id="emailHelp" style={{ color: 'red' }} className="form-text">{props.errorMessage.errorLogin || ''}</div>
				<div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
			</div>
			<div className="mb-3">
				<label className="form-label">Пароль</label>
				<Field validate={[required]} className="form-control" name="password" component="input" type="password" />
			</div>
			<div className="mb-3">
				<label className="form-label">Nick Name</label>
				<Field validate={[required]} className="form-control" name="nickName" component="input" />
				<div id="emailHelp" style={{ color: 'red' }} className="form-text">{props.errorMessage.errorNickName || ''}</div>
			</div>
			<Button type="submit" className="btn btn-succes">Зарегистроваться</Button>
			<p style={{ marginTop: '10px' }}>Есть аккаунт? <span onClick={props.hideSign} style={{ color: 'blue', cursor: 'pointer' }}>Войти</span></p>
		</form>
	)
}

export default reduxForm({ form: 'registation' })(ModalFormRegistration)
