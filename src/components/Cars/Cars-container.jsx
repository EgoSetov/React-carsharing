import React from 'react'
import { connect } from 'react-redux'
import Cars from './Cars'
import { setProfile } from '../../redux/CarsReducer'

function CarsContainer(props) {
	return (
		<Cars {...props} />
	)
}

const mapStateToProps = (state) => ({
	cars: state.cars.data.cars,
	profile: state.cars.data.profileNow
})

export default connect(mapStateToProps, {
	setProfile
})(CarsContainer)
