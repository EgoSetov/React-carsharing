import React from 'react'

function ProfileInfo({ profile }) {

	return (
		<div className="info">
			<h1>Характеристикa:</h1>
			<h2>{`${profile.name} ${profile.age}`}</h2>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Количество бензина: {profile.countFuel}</li>
				<li className="list-group-item">Стоимость в минуту: {profile.price}</li>
				<li className="list-group-item">Дополнительная информация: {profile.description}</li>
			</ul>
			<div className="booking d-flex">
				<button className="btn btn-success">Забронировать</button>
			</div>
		</div>
	)
}

export default ProfileInfo
