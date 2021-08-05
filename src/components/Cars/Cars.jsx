import React from 'react'
import { NavLink } from 'react-router-dom'

let CarCard = ({ info, setProfile }) => {

	let setProfileFunc = (id) => {
		setProfile(id)
	}

	return (
		<div className="card" style={{ width: '18rem', marginTop: '20px' }}>
			<img src={info.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{info.name}</h5>
				<p className="card-text">{info.description}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Год выпуска: {info.age}</li>
				<li className="list-group-item">Кол-во бензина: {info.countFuel}л.</li>
				<li className="list-group-item">Стоимость: {info.price}р./минута</li>
			</ul>
			<div className="card-body">
				<NavLink onClick={() => { setProfileFunc(info.id) }} to={`/profile/${info.id}`} className="btn btn-info" style={{ margin: '0px 2px' }}>Подробнее</NavLink>
				<button className="btn btn-success">Забронировать</button>
			</div>
		</div>
	)
}

function Cars({ cars, setProfile }) {

	let mapElement = cars.map(el => <CarCard key={el.id} info={el} setProfile={setProfile} />)

	return (
		<div className="container d-flex justify-content-around flex-wrap">
			{mapElement}
		</div>
	)
}

export default Cars
