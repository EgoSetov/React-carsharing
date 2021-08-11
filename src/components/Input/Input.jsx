import React from 'react'
import './Input.css'

export let Input = ({ input, meta, ...props }) => {
	console.log(props);
	return (
		<div>
			<input {...props} />
			<div id="emailHelp" className="form-text error-text">{meta.error ? '' : meta.error}</div>
		</div>
	)
}