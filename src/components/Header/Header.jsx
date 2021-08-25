import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Header.module.css'

let Header = (props) => {

	let showModal = () => {
		props.show()
	}

	return (
		<>
			<nav className={`navbar navbar-expand-lg navbar-light bg-ligth ${s.castomNav}`}>
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Переключатель навигации">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<NavLink to="/home" className="navbar-brand">CarSharing</NavLink>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/home" className="nav-link active" aria-current="page">Главная</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/cars" className="nav-link active">Машины</NavLink>
							</li>
							{!props.adminCheck ? '' :
								<li className="nav-item">
									<NavLink to="/adminPanel" className="nav-link active">Admin panel</NavLink>
								</li>
							}
						</ul>
						<div className="d-flex">
							{!props.authorized
								? <button onClick={showModal} to="/login" className="btn btn-primary">Войти</button>
								: <NavLink to={`/userProfile`}><h4>{props.dataUser.userName}</h4></NavLink>}
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header;

