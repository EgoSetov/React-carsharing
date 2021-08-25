import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import s from './Admin.module.css'
import ProfileUserContainer from './PrfoileUser/ProfileUserContainer';
import UsersPanel from './UsersPanel/UsersPanel';
import CarsPanelContainer from './CarsPanel/CarsPanelContainer';
import ProfileCarContainer from './ProfileCar/ProfileCarContainer';

function adminPanel(props) {
	if (!props.adminAccount) return <div style={{ textAlign: 'center', marginTop: '20px' }} className="container"><h1>Эта страница предназначена  не для тебя!</h1></div>
	return (
		<div className="container">
			<div className={s.headerPanel}>
				<NavLink to="/adminPanel/usersPanel">Пользователи</NavLink>
				<NavLink to="/adminPanel/carsPanel">Машины</NavLink>
			</div>
			<div className="main">
				<Route path="/adminPanel/carsPanel" component={() => <CarsPanelContainer />} />
				<Route path="/adminPanel/usersPanel" render={() => <UsersPanel users={props.users} />} />
				<Route path="/adminPanel/profileUser/:id?" render={() => <ProfileUserContainer />} />
				<Route path="/adminPanel/profileCar/:id?" render={() => <ProfileCarContainer />} />
			</div>
		</div>
	)
}

export default adminPanel
