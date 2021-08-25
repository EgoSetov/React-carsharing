import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './ProfileUser.css'

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

function ProfileUser(props) {
	const [showPas, setShowPas] = useState(false)
	const [showInfo, setShowInfo] = useState(false)

	let showPassword = () => {
		setShowPas((prev) => prev = !prev)
	}
	let showInfoFunc = () => {
		setShowInfo((prev) => prev = !prev)
	}
	let deletUser = (id) => {
		props.deletUser(id)
	}

	let password = !showPas ? props.user.password.split('').map(el => el = '◼') : props.user.password
	let historyEl = props.user.historyBooking.filter(el => el.end !== '').map(el => <HistoryLi key={el.id} info={el} />)
	let drivingEl = props.user.historyBooking.filter(el => el.end === '').map(el => <HistoryLi key={el.id} info={el} />)

	return (
		<div style={{ marginTop: '20px' }} className="container">
			<h3>Ник нейм: {props.user.userName}</h3>
			<h3>Логин: {props.user.login}</h3>
			<h3>Пароль: {password} <small onClick={showPassword} style={{ color: 'gray', cursor: 'pointer' }}>показать</small></h3>
			<div style={{ margin: '10px 0' }} className="buttons">
				<button onClick={() => { props.setAccount(props.user) }} style={{ margin: '0 5px' }} className="btn btn-success">Войти за него</button>
				<button onClick={showInfoFunc} className="btn btn-danger">Удалить пользователя</button>
				<button onClick={() => { deletUser(props.user.id) }} style={{ marginLeft: '10px' }} className={`btn btn-info bnt-aunt ${!showInfo ? 'd-none' : ''}`}>Подтвердить дейтвие</button>
			</div>
			<h2>Незаконченная поездка</h2>
			{drivingEl}
			<h2>История поездок</h2>
			{historyEl}
		</div >
	)
}

export default ProfileUser
