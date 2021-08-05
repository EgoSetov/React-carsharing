import React, { Component } from 'react'
import LoginForm from './Login-form/LoginForm'

export default class Login extends Component {
	render() {
		return (
			<div className="container">
				<h1>Login</h1>
				<LoginForm></LoginForm>
			</div>
		)
	}
}
