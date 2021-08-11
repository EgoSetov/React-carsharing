import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAccount } from '../../redux/AccountReducer'
import { useEffect } from 'react'

function HeaderContainer(props) {
	
	useEffect(() => {
		const dataForm = props.dataForm.login + props.dataForm.password
		const dataUsers = props.dataUsers
		const dataUser = dataUsers.filter(el => el.login + el.password === dataForm)
		if (!(JSON.stringify(dataUser) === '[]')) { props.setAccount(dataUser[0]) }
	})


	return <Header {...props} />

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
