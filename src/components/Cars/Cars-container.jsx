import React from 'react'
import { connect } from 'react-redux'
import Cars from './Cars'
import { setProfile, changeBusy } from '../../redux/CarsReducer'
import { setMessage } from '../../redux/MessageReducer'
import { setBookingUser } from '../../redux/UsersReducer'

function CarsContainer(props) {

	Date.prototype.format = function (format = 'yyyy-mm-dd') {
		const replaces = {
			yyyy: this.getFullYear(),
			mm: ('0' + (this.getMonth() + 1)).slice(-2),
			dd: ('0' + this.getDate()).slice(-2),
			hh: ('0' + this.getHours()).slice(-2),
			MM: ('0' + this.getMinutes()).slice(-2),
			ss: ('0' + this.getSeconds()).slice(-2)
		};
		let result = format;
		for (const replace in replaces) {
			result = result.replace(replace, replaces[replace]);
		}
		return result;
	};

	let checkAccount = (id) => {
		if (!props.profile.authorized) {
			props.setMessage({
				text: 'Авторизуйтесь, чтобы забронировать автомобиль',
				date: 'прямо сейчас',
				demonstrate: true
			})
		} else {
			props.changeBusy(id)
			let date = new Date()
			let carModel = props.cars.filter(el => el.id === id)[0]
			props.setBookingUser({
				id: props.profile.dataUser.historyBooking.length + 1,
				start: (date).format('yyyy/mm/dd hh:MM'),
				end: '',
				carModel: carModel
			}, props.profile.dataUser.id)

		}
	}

	return (
		<Cars {...props} checkAccount={checkAccount} profile={props.profile} />
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
	changeBusy
})(CarsContainer)
