import React, { useState } from 'react'
import { connect } from 'react-redux'
import ModalFormRegistration from './ModalFormRegistration'
import { addUser } from '../../../redux/UsersReducer'
import { setDataForm } from '../../../redux/AccountReducer'
import { setMessage } from '../../../redux/MessageReducer'

function ModalFormRegistrationContainer(props) {

	const [errorMessage, setErrorMessage] = useState('')

	let addUserAcc = (value) => {
		let loginAunt = props.users.some(el => el.login === value.login)
		let userAunt = props.users.some(el => el.userName === value.nickName)
		if (!loginAunt && !userAunt) {
			props.addUser(value)
			props.setDataForm(value)
			props.hideSign()
			props.setMessage({
				text: 'вы успешно зарегистрировались',
				date: 'только что',
				demonstrate: true
			})
		} else {
			setErrorMessage(() => ({
				errorLogin: loginAunt ? 'Аккаунт с такой электронной почтой уже существует' : '',
				errorNickName: userAunt ? 'Ник уже занят, попробуйте другой' : ''
			}))
		}
	}




	return <ModalFormRegistration {...props} addUserAcc={addUserAcc} errorMessage={errorMessage} />
}

let mapStateToProps = (state) => {
	return {
		users: state.users.data.dataUser
	}
}

export default connect(mapStateToProps, {
	addUser,
	setDataForm,
	setMessage
})(ModalFormRegistrationContainer)
