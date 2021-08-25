import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAccount } from '../../redux/AccountReducer'

function HeaderContainer(props) {

	useEffect(() => {
		const dataForm = props.dataForm.login + props.dataForm.password
		const dataUsers = props.dataUsers
		const dataUser = dataUsers.filter(el => el.login + el.password === dataForm)
		if (!(JSON.stringify(dataUser) === '[]')) { props.setAccount(dataUser[0]) }

	})

	let adminCheck = props.dataUser.id ? props.dataUser.login === 'admin@mail.ru' : false

	return <Header {...props} adminCheck={adminCheck} />

}

let mapStateToProps = (state) => ({
	dataUser: state.account.data.dataUser,
	authorized: state.account.data.authorized,
	dataForm: state.account.dataForm,
	dataUsers: state.users.data.dataUser
})


export default connect(mapStateToProps, {
	setAccount
})(HeaderContainer)
