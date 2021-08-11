import React from 'react'
import { connect } from 'react-redux'
import ModalForm from './ModalFormLogin'
import { setDataForm } from '../../../redux/AccountReducer'
import { setMessage } from '../../../redux/MessageReducer'

function ModalFormContainer(props) {

	let setUser = () => {
		if (props.dataUser.id) {
			props.hide()
			props.setMessage({
				text: 'вы успешно вошли',
				date: 'только что',
				demonstrate: true
			})
		}
	}

	return <ModalForm {...props} setUser={setUser} />
}

const mapStateToProps = (state) => ({
	dataUser: state.account.data.dataUser,
})

export default connect(mapStateToProps, {
	setDataForm,
	setMessage
})(ModalFormContainer)

