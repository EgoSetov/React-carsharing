import React from 'react'
import { useState } from 'react'

function ProfileCar({ profile, saveChange, deleteCar }) {
	const [chanchedPanel, setChanchedPanel] = useState(false)
	const [showSave, setShowSave] = useState(false)
	const [dataChange, setDataChange] = useState({
		countFuel: profile.countFuel,
		price: profile.price,
		description: profile.description
	})

	let saveChangeFunc = () => {
		saveChange(dataChange, profile.id)
		setChanchedPanel(prev => prev = !prev)
		setShowSave(prev => prev = !prev)
	}

	let changeCount = (e) => {
		setDataChange((prev) => ({
			...prev,
			countFuel: e
		}))
	}
	let changePrice = (e) => {
		setDataChange((prev) => ({
			...prev,
			price: e
		}))
	}
	let changeDescription = (e) => {
		setDataChange((prev) => ({
			...prev,
			description: e
		}))
	}

	let showChangePanel = () => {
		setChanchedPanel(prev => prev = !prev)
		setShowSave(prev => prev = !prev)
	}
	return (
		<div className="info" style={{ marginTop: '20px' }}>
			<h1>Характеристикa:</h1>
			<h2>{`${profile.name} ${profile.age}`}</h2>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Количество бензина: {!chanchedPanel ? profile.countFuel : <input onChange={(e) => { changeCount(e.target.value) }} type="text" value={dataChange.countFuel}></input>} </li>
				<li className="list-group-item">Стоимость в минуту: {!chanchedPanel ? profile.price : <input onChange={(e) => { changePrice(e.target.value) }} type="text" value={dataChange.price}></input>}</li>
				<li className="list-group-item">Дополнительная информация: {!chanchedPanel ? profile.description : <input onChange={(e) => { changeDescription(e.target.value) }} type="text" value={dataChange.description}></input>}</li>
			</ul>
			<div className="booking d-flex">
				<div className="confirmation">
					<button onClick={showChangePanel} className="btn btn-success">Изменить</button>
					{!showSave ? '' : <button onClick={saveChangeFunc} className="btn btn-info">Сохранить</button>}
				</div>
				<button onClick={() => { deleteCar(profile.id) }} style={{ marginLeft: '10px' }} className="btn btn-danger">Удалить</button>

			</div>
		</div>
	)
}

export default ProfileCar
