import React from 'react'
import { Toast } from 'react-bootstrap'
import './Message.css'
import { connect } from 'react-redux'

function MessageContainer(props) {
	return <Message {...props} />
}

function Message(props) {
	return (
		<Toast
			show={props.state.demonstrate}
			style={{ backgroundColor: '#85A3FF' }}>
			<Toast.Header>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				<strong className="me-auto">CarSharing</strong>
				<small>{props.state.date}</small>
			</Toast.Header>
			<Toast.Body>{props.state.text}</Toast.Body>
		</Toast>
	)
}

let mapStateToProps = (state) => ({
	state: state.message.data
})

export default connect(mapStateToProps, {})(MessageContainer)
