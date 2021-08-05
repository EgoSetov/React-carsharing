import React from 'react'

function Spinner() {
	return (
		<div class="d-flex align-items-center">
			<strong>Загрузка...</strong>
			<div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
		</div>
	)
}

export default Spinner
