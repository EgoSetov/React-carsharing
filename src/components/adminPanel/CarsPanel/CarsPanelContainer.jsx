import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CarsPanel from './CarsPanel'
import { addCar } from '../../../redux/CarsReducer'

function CarsPanelContainer(props) {
	return <CarsPanel  {...props} />
}

let mapStateToProps = (state) => ({
	cars: state.cars.data.cars
})

export default compose(
	connect(mapStateToProps, {
		addCar
	})
)(CarsPanelContainer)
