import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CarsPanel.css'
import { Button, Modal, CloseButton } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../Validator/Validator'

let CarCard = ({ info }) => {
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
				<button className="btn btn-info">
					<NavLink className="info" to={`/adminPanel/profileCar/${info.id}`}>Подробнее</NavLink>
				</button>

			</div>
		</div>
	)
}

function CarsPanel(props) {
	let mapCarsEl = props.cars.map(el => <CarCard key={el.id} info={el} />)
	const [showAddPanel, setShowAddPanel] = useState(false)
	let showPanel = () => {
		setShowAddPanel((prev) => prev = !prev)
	}
	let handleSub = (values) => {
		props.addCar(values)
	};
	return (
		<>
			<button onClick={showPanel} style={{ marginTop: '10px' }} className="btn btn-success">Добавить</button>
			<Modal style={{ marginTop: '-70px' }} show={showAddPanel} className={props.className}>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">
						Добавить
					</Modal.Title>
					<CloseButton onClick={showPanel} />
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={props.handleSubmit(handleSub)}>
						<div className="mb-3">
							<label className="form-label">*Название</label>
							<Field validate={[required]} type="text" className="form-control" name="name" component="input" />
							<div className="form-text">Обязательно напиши название полностью.</div>
						</div>
						<div className="mb-3">
							<label className="form-label">ссылка на фотографию</label>
							<Field type="text" className="form-control" name="img" component="input" />
						</div>
						<div className="mb-3">
							<label className="form-label">*Год выпуска</label>
							<Field validate={[required]} className="form-control" name="year" component="input" type="number" />
						</div>
						<div className="mb-3">
							<label className="form-label">*Кол-во бензина</label>
							<Field validate={[required]} className="form-control" name="countFuel" component="input" type="number" />
						</div>
						<div className="mb-3">
							<label className="form-label">*Стоимость</label>
							<Field validate={[required]} className="form-control" name="price" component="input" type="number" />
							<div id="emailHelp" className="form-text">Указать стоимость в минуту.</div>
						</div>
						<div className="mb-3">
							<label className="form-label">Допольнительная информация</label>
							<Field className="form-control" name="info" component="textarea" type="text" />
							<div id="emailHelp" className="form-text">Краткое описание</div>
						</div>
						<p style={{ color: 'red' }}>Запольните все поля с *</p>
						<Button type="submit" className="btn btn-succes">Добавить</Button>
					</form>
				</Modal.Body>
			</Modal >


			<div className="container d-flex justify-content-around">
				{mapCarsEl}
			</div>
		</>

	)
}

export default reduxForm({ form: 'addCar' })(CarsPanel)
