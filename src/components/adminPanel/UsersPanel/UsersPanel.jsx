import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Admin.module.css'


let Card = (props) => {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img className="card-img-top" src="http://cdn.onlinewebfonts.com/svg/download_314020.png" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.users.userName}</h5>
				<NavLink to={`profileUser/${props.users.id}`} className="btn btn-primary">Подробнее</NavLink>
			</div>
		</div>
	)
}

function UsersPanel(props) {

	let mapElement = props.users.map(el => <Card key={el.id} users={el} />)

	return (
		<div>
			<div className={s.usersCards}>
				{mapElement}
			</div>
		</div>
	)
}

export default UsersPanel
