import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import ProfileUser from './ProfileUser';
import { setAccount, clearDataUser, setDataForm } from '../../../redux/AccountReducer'
import { deleteUser } from '../../../redux/UsersReducer'
import { setMessage } from '../../../redux/MessageReducer'



function ProfileUserContainer(props) {

	let user = props.users.filter(el => el.id === +props.match.params.id)[0]
	let setAccount = (data) => {
		props.clearDataUser()
		props.setDataForm({ login: user.login, password: user.password })
		props.setAccount(data)
	}
	let deletUser = (id) => {
		if (!user.historyBooking.filter(el => el.end === '').length) {
			props.location.pathname = '/adminPanel'
			props.deleteUser(id)
		} else {
			props.setMessage({
				text: 'Пользователь не закончил поездку',
				date: 'только что',
				demonstrate: true
			})
		}
	}

	return <ProfileUser {...props} user={user} setAccount={setAccount} deletUser={deletUser} />
}

let mapStateToProps = (state) => ({
	users: state.users.data.dataUser
})

export default compose(
	withRouter,
	connect(mapStateToProps, {
		setAccount,
		clearDataUser,
		setDataForm,
		deleteUser,
		setMessage
	})
)(ProfileUserContainer)
