import React from 'react'
import { Modal, CloseButton } from 'react-bootstrap'
import ModalFormContainer from './Modal-form-login/ModalFormLoginContainer'
import ModalFormRegistrationContainer from './Modal-form-registration/ModalFormRegistrationContainer'

function ModalSign(props) {
	return (
		<Modal show={props.show} className={props.className}>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.title}
				</Modal.Title>
				<CloseButton onClick={props.hide} />
			</Modal.Header>
			<Modal.Body>
				{props.modalSettin
					? <ModalFormRegistrationContainer hideSign={props.hideSign}></ModalFormRegistrationContainer>
					: <ModalFormContainer showSign={props.showSign} hide={props.hide}></ModalFormContainer>
				}

			</Modal.Body>
		</Modal >
	)
}

export default ModalSign
