import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'

function LoginContainer(props) {
	return <Login {...props}></Login>
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(LoginContainer)

