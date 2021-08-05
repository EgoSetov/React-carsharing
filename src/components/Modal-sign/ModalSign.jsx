import React from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'
import ModalFormContainer from './Modal-form/ModalFormContainer'

function ModalSign(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Login
				</Modal.Title>
				<CloseButton onClick={props.hide} />
			</Modal.Header>
			<Modal.Body>
				<ModalFormContainer></ModalFormContainer>
			</Modal.Body>
		</Modal>
	)
}

export default ModalSign
