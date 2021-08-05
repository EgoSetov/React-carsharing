import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './components/Home/Home-container';
import RatesContainer from './components/Cars/Cars-container';
import LoginContainer from './components/Login/Login-container';
import ProfileContainer from './components/Profile/Profile-containre';
import ModalSign from './components/Modal-sign/ModalSign';


function App() {
	const [modalShow, setModalShow] = React.useState(false);
	let show = () => {
		setModalShow(true)
	}
	let hide = () => {
		setModalShow(false)
	}
	return (
		<>
			<BrowserRouter>
				<Header show={show} />
				<Route path="/home" component={HomeContainer} />
				<Route path="/cars" component={RatesContainer} />
				<Route path="/login" component={LoginContainer} />
				<Route path="/profile/:id?" component={ProfileContainer} />
				<ModalSign
					className="modalForm"
					show={modalShow}
					hide={hide}>
				</ModalSign>
			</BrowserRouter>
		</>
	);
}

export default App;
