import React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import { clearDataUser } from '../../redux/AccountReducer'
import { setMessage } from '../../redux/MessageReducer'
import { exitBooking } from '../../redux/UsersReducer'
import { changeBusy } from '../../redux/CarsReducer'
import { format } from '../../formatDate'

function UserProfileContaner(props) {


	let exit = () => {
		props.clearDataUser()
		props.setMessage({
			text: 'Вы успешно вышли',
			date: 'прямо сейчас',
			demonstrate: true
		})
	}

	let exitBooking = (idUser, idCar) => {
		props.exitBooking(idUser, format())
		props.changeBusy(idCar)
	}

	return <UserProfile {...props} exit={exit} exitBooking={exitBooking} />
}

let mapStateToProps = (state) => ({
	profile: state.account.data.dataUser,
	profileCarBooking: state.account.data.carBooking
})

export default connect(mapStateToProps, {
	clearDataUser,
	setMessage,
	changeBusy,
	exitBooking
})(UserProfileContaner)
