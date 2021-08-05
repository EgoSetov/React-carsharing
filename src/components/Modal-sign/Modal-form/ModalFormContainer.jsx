import React from 'react'
import { connect } from 'react-redux'
import ModalForm from './ModalForm'

function ModalFormContainer(props) {
	return <ModalForm {...props} />
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(ModalFormContainer)

