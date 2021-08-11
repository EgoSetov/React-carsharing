import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'

function HomeContainer(props) {
	return (
		<Home {...props} />
	)
}

let mapStateToProps = (state) => ({
	
})

export default connect(mapStateToProps, {})(HomeContainer)
