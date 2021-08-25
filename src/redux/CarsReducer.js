const SET_PROFILE = 'SET_PROFILE'
const CHANGE_BUSY = 'CHANGE_BUSY'
const CHANGE_SETTING = 'CHANGE_SETTING'
const DELETE_CAR = 'DELETE_CAR'
const ADD_CAR = 'ADD_CAR'

const initialState = {
	data: {
		cars: [
			{ id: 1, name: 'Tesla', age: 2018, countFuel: 40, price: 18, imageUrl: 'https://clck.ru/WbqgY', description: 'Электрокар нового поколения', busy: false },
			{ id: 2, name: 'Mazda', age: 2019, countFuel: 10, price: 12, imageUrl: 'https://clck.ru/WbsWi', description: 'Очень надежный автомобиль', busy: false },
			{ id: 3, name: 'Lexus', age: 2015, countFuel: 20, price: 15, imageUrl: 'https://clck.ru/WbtuW', description: 'Ощущаю эту громндную машину', busy: false },
			{ id: 4, name: 'Audi', age: 2021, countFuel: 38, price: 16, imageUrl: 'https://clck.ru/Wbtwc', description: 'Быстрая чертовка!', busy: false },
		],
		profileNow: null
	}
}

let CarsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE: {
			return {
				...state,
				profileNow: state.data.cars.filter(el => el.id === action.id)
			}
		}
		case CHANGE_BUSY: {
			let cars = [...state.data.cars]
			let index = cars.findIndex(el => el.id === action.id)
			cars[index].busy = !cars[index].busy;
			return {
				...state,
				data: {
					cars,
					profileNow: state.data.profileNow
				}
			}
		}
		case CHANGE_SETTING: {
			let { countFuel, price, description } = action.data
			let cars = JSON.parse(JSON.stringify(state.data.cars))
			let index = cars.findIndex(el => el.id === action.id)
			cars[index].countFuel = countFuel
			cars[index].price = price
			cars[index].description = description
			return {
				...state,
				data: {
					cars
				},
				profileNow: state.data.profileNow
			}
		}
		case DELETE_CAR: {
			let cars = JSON.parse(JSON.stringify(state.data.cars))
			cars = cars.filter(el => el.id !== action.id)
			return {
				...state,
				data: {
					cars,
					profileNow: state.data.profileNow
				}
			}
		}
		case ADD_CAR: {
			const { name, price, year, countFuel, info, img } = action.data
			let newCar = {
				id: state.data.cars[state.data.cars.length - 1].id + 1,
				name,
				age: year,
				countFuel,
				price,
				imageUrl: img ? img : 'https://kolyaska-krovatka.ru/image/cache/catalog/111/no-photo-1200x800.png',
				description: info ? info : '',
				busy: false
			}
			return {
				...state,
				data: {
					cars: [...state.data.cars, newCar],
					profileNow: state.data.profileNow
				}
			}
		}
		default: return state
	}
}

export const setProfile = (id) => ({ type: SET_PROFILE, id })
export const changeBusy = (id) => ({ type: CHANGE_BUSY, id })
export const changeSetting = (data, id) => ({ type: CHANGE_SETTING, data, id })
export const deleteCar = (id) => ({ type: DELETE_CAR, id })
export const addCar = (data) => ({ type: ADD_CAR, data })

export default CarsReducer