import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Proifle from './Proifle'

function ProfileContainer(props) {

	const profile = props.cars.filter(el => el.id === +props.match.params.id)[0]

	return <Proifle {...props} profile={profile} />

}

const mapStateToProps = (state) => ({
	cars: state.cars.data.cars
})



export default compose(
	connect(mapStateToProps, {

	}),
	withRouter
)(ProfileContainer)
