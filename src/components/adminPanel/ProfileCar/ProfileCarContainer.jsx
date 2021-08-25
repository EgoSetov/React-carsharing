import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import ProfileCar from './ProfileCar'
import { changeSetting, deleteCar } from '../../../redux/CarsReducer'

function ProfileCarContainer(props) {
	const profile = props.cars.filter(el => el.id === +props.match.params.id)[0]
	let saveChange = (data, id) => {
		props.changeSetting(data, id)
	}
	let deleteCar = (id) => {
		props.location.pathname = '/adminPanel'
		props.deleteCar(id)
	}
	return <ProfileCar profile={profile} saveChange={saveChange} deleteCar={deleteCar} />
}

let mapStateToProps = (state) => ({
	cars: state.cars.data.cars
})

export default compose(
	withRouter,
	connect(mapStateToProps, {
		changeSetting,
		deleteCar
	})
)(ProfileCarContainer)

