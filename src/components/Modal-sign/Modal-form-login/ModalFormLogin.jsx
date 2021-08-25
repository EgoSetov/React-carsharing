import React, { useEffect, useState } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap'
import { required } from '../../Validator/Validator';

function ModalForm(props) {

	const [warning, setWarning] = useState(false)

	let handleSub = (values) => {
		props.setDataForm(values)
		if (!props.dataUser.id) {
			if (values.login && values.password) {
				setWarning((prev) => prev = true)
			}
		}
	};

	useEffect(() => {
		props.setUser()
	})

	let change = () => {
		props.showSign()
	}

	return (
		<form onSubmit={props.handleSubmit(handleSub)}>
			{!warning
				? ''
				: <div style={{ color: 'red', fontSize: '18px' }} id="emailHelp" className="form-text">Возможно неправильный логин или пароль</div>}

			<div className="mb-3">
				<label className="form-label">Адрес электронной почты</label>
				<Field type="email" className="form-control" validate={[required]} name="login" component="input" />
				<div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
			</div>
			<div className="mb-3">
				<label className="form-label">Пароль</label>
				<Field className="form-control" validate={[required]} name="password" component="input" type="password" />
			</div>
			<Button type="submit" className="btn btn-succes">Войти</Button>
			<p style={{ marginTop: '10px' }}>Нет аккаунта? <span onClick={change} style={{ color: 'blue', cursor: 'pointer' }}>Зарегистроваться</span></p>
		</form>
	)
}

export default reduxForm({ form: 'login' })(ModalForm)
