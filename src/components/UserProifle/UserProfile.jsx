import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function HistoryLi({ info }) {
	return (
		<div className="card" style={{ margin: '10px 0px', backgroundColor: '#D1DAFF' }}>
			<div className="card-body">
				<div className="infoDrive">
					<p>Начало езды: {info.start}</p>
					<p>Конец езды: {info.end}</p>
				</div>
				<div className="infoCar">
					<h5>Информация про машину</h5>
					<p>Машина: <NavLink to={`/profile/${info.carModel.id}`}>{info.carModel.name}</NavLink></p>
				</div>
			</div>

		</div>
	)
}

function UserProfile(props) {

	const [showPass, setShowPass] = useState(false)

	if (!props.profile.userName) return <div style={{ textAlign: 'center' }} className="container"><h1>Авторизуйтесь, чтобы увидеть информацию</h1></div>

	let password = props.profile.password.split('').map(el => el = '◼')


	let show = () => {
		setShowPass(prev => prev = !prev)
	}


	let historyElem = props.profile.historyBooking.map(el => <HistoryLi key={el.id} info={el}></HistoryLi>)

	return (
		<div className="container" style={{ marginTop: '30px' }}>
			<div className="userInfo list-group list-group-flush">
				<h2>Информация</h2>
				<p className="list-group-item">Юзер Ник: {props.profile.userName}</p>
				<p className="list-group-item">Электронная почта: {props.profile.login}</p>
				<p className="list-group-item">Пароль: {!showPass ? password : props.profile.password} <small onClick={show} style={{ color: 'gray', cursor: 'pointer' }}>показать</small></p>
				<button onClick={props.exit} className="btn btn-danger">Выйти</button>
			</div>
			<hr></hr>
			<div style={{ marginTop: '10px' }} className="history">
				<h2>История поездок</h2>
				{historyElem}
			</div>
		</div>
	)
}

export default UserProfile
