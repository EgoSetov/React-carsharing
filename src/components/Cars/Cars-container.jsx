import React from 'react'
import { connect } from 'react-redux'
import Cars from './Cars'
import { setProfile } from '../../redux/CarsReducer'
import { setMessage } from '../../redux/MessageReducer'
import { setBooking } from '../../redux/AccountReducer'

function CarsContainer(props) {

	let checkAccount = (id) => {
		if (!props.profile.authorized) {
			props.setMessage({
				text: 'Авторизуйтесь, чтобы забронировать автомобиль',
				date: 'прямо сейчас',
				demonstrate: true
			})
		} else {
			props.setBooking({
				id: props.profile.dataUser.historyBooking.length + 1,
				start: '123123',
				end: '123123',
				carModel: '123123123'
			})
		}
	}

	return (
		<Cars {...props} checkAccount={checkAccount} />
	)
}

const mapStateToProps = (state) => ({
	cars: state.cars.data.cars,
	profile: state.account.data
})

export default connect(mapStateToProps, {
	setProfile,
	setMessage,
	setBooking
})(CarsContainer)
