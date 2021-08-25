import React from 'react'
import { connect } from 'react-redux'
import Cars from './Cars'
import { setProfile, changeBusy } from '../../redux/CarsReducer'
import { setMessage } from '../../redux/MessageReducer'
import { setBookingUser } from '../../redux/UsersReducer'
import { setCarBooking } from '../../redux/AccountReducer'
import { exitBooking } from '../../redux/UsersReducer'
import { format } from '../../formatDate'

function CarsContainer(props) {



	let checkAccount = (info) => {
		if (!props.profile.authorized) {
			props.setMessage({
				text: 'Авторизуйтесь, чтобы забронировать автомобиль',
				date: 'прямо сейчас',
				demonstrate: true
			})
		} else {
			props.setCarBooking(info)
			props.changeBusy(info.id)
			let carModel = props.cars.filter(el => el.id === info.id)[0]
			props.setBookingUser({
				id: props.profile.dataUser.historyBooking.length + 1,
				start: format(),
				end: '',
				carModel: carModel
			}, props.profile.dataUser.id)

		}
	}

	let exitBooking = (idUser, idCar) => {
		props.exitBooking(idUser, format())
		props.changeBusy(idCar)
	}

	return (
		<Cars {...props} checkAccount={checkAccount} profile={props.profile} exitBooking={exitBooking} />
	)
}

const mapStateToProps = (state) => ({
	cars: state.cars.data.cars,
	profile: state.account.data
})

export default connect(mapStateToProps, {
	setProfile,
	setMessage,
	setBookingUser,
	changeBusy,
	setCarBooking,
	exitBooking
})(CarsContainer)
