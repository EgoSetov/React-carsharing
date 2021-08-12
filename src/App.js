import React, { useState } from 'react'
import './App.css';
import HeaderContainer from './components/Header/Header-container'
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './components/Home/Home-container';
import RatesContainer from './components/Cars/Cars-container';
import LoginContainer from './components/Login/Login-container';
import ProfileContainer from './components/Profile/Profile-containre';
import ModalSign from './components/Modal-sign/ModalSign';
import MessageContainer from './components/Message/Message';
import UserProfileContaner from './components/UserProifle/UserProfileContaner';

function App() {

	const [modalShow, setModalShow] = useState(false);
	const [modalSettin, setModalSigin] = useState({ bool: false, title: 'Log in' })

	let showFromLogin = () => {
		setModalShow(true)
	}
	let hideFormLogin = () => {
		setModalShow(false)
	}

	let showFromSignIn = () => {
		setModalSigin(() => ({ bool: true, title: 'Registration' }))
	}
	let hideFormSignIn = () => {
		setModalSigin(() => ({ bool: false, title: 'Log in' }))
	}

	return (
		<>
			<BrowserRouter>
				<HeaderContainer show={showFromLogin} />
				<Route path="/home" component={HomeContainer} />
				<Route path="/cars" component={RatesContainer} />
				<Route path="/login" component={LoginContainer} />
				<Route path="/profile/:id?" component={ProfileContainer} />
				<Route path="/userProfile" component={UserProfileContaner} />
				<ModalSign
					className="modalForm"
					title={modalSettin.title}
					show={modalShow}
					hide={hideFormLogin}
					modalSettin={modalSettin.bool}
					showSign={showFromSignIn}
					hideSign={hideFormSignIn}>
				</ModalSign>
				<MessageContainer></MessageContainer>
			</BrowserRouter>
		</>
	);
}

export default App;
