import React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import { clearDataUser } from '../../redux/AccountReducer'
import { setMessage } from '../../redux/MessageReducer'

function UserProfileContaner(props) {

	let exit = () => {
		props.clearDataUser()
		props.setMessage({
			text: 'Вы успешно вышли',
			date: 'прямо сейчас',
			demonstrate: true
		})
	}

	return <UserProfile {...props} exit={exit} />
}

let mapStateToProps = (state) => ({
	profile: state.account.data.dataUser
})

export default connect(mapStateToProps, {
	clearDataUser,
	setMessage
})(UserProfileContaner)
