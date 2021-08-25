import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { changeBusy } from '../../redux/CarsReducer'
import { setBookingUser } from '../../redux/UsersReducer'
import { setCarBooking } from '../../redux/AccountReducer'
import { exitBooking } from '../../redux/UsersReducer'
import { format } from '../../formatDate'
import Proifle from './Proifle'

function ProfileContainer(props) {


	const profile = props.cars.filter(el => el.id === +props.match.params.id)[0]

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

	return <Proifle {...props} profileCar={profile} profile={props.profile} checkAccount={checkAccount} exitBooking={exitBooking} />



}

const mapStateToProps = (state) => ({
	cars: state.cars.data.cars,
	profile: state.account.data
})



export default compose(
	connect(mapStateToProps, {
		setBookingUser,
		changeBusy,
		setCarBooking,
		exitBooking
	}),
	withRouter
)(ProfileContainer)
