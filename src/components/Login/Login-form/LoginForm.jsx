import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'

function LoginForm() {
	return (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
				<Form.Label column sm="2">
					Email
				</Form.Label>
				<Col sm="10">
					<Form.Control type="email" plaintext readOnly value="email@example.com" />
				</Col>
			</Form.Group>

			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Password
				</Form.Label>
				<Col sm="10">
					<Form.Control type="password" value="egor123" placeholder="Password" />
				</Col>
			</Form.Group>
		</Form>
	)
}

export default LoginForm
