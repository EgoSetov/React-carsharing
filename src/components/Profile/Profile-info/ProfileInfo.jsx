import React from 'react'

function ProfileInfo({ profile, checkAccount, exitBooking, profileCar }) {

	let button = <button onClick={() => { checkAccount(profileCar) }} className="btn btn-success" disabled={profileCar.busy}>Забронировать</button>

	if (profile.dataUser.historyBooking) {
		if (profile.dataUser.historyBooking.filter(el => el.end === '').length) {
			let idBooking = profile.dataUser ? profile.dataUser.historyBooking.filter(el => el.end === '')[0].carModel.id : ''
			button = !(profileCar.id === idBooking)
				? <button onClick={() => { checkAccount(profileCar) }} className="btn btn-success" disabled={true}>Забронировать</button>
				: <button onClick={() => { exitBooking(profile.dataUser.id, profileCar.id) }} className="btn btn-danger">Закончить</button>
		}
	}

	return (
		<div className="info">
			<h1>Характеристикa:</h1>
			<h2>{`${profileCar.name} ${profileCar.age}`}</h2>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Количество бензина: {profileCar.countFuel}</li>
				<li className="list-group-item">Стоимость в минуту: {profileCar.price}</li>
				<li className="list-group-item">Дополнительная информация: {profileCar.description}</li>
			</ul>
			<div className="booking d-flex">
				{button}
			</div>
		</div>
	)
}

export default ProfileInfo
