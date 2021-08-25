const ADD_USER = 'ADD_USER'
const SET_BOOKING_USER = 'SET_BOOKING_USER'
const EXIT_BOOKING = 'EXIT_BOOKING'
const DELETE_USER = 'DELETE_USER'


let initialState = {
	data: {
		dataUser: [
			{ id: 1, login: 'admin@mail.ru', password: 'admin', userName: 'admin', historyBooking: [] },
			{ id: 2, login: 'user@mail.ru', password: 'user123', userName: 'user', historyBooking: [] },
			{ id: 3, login: 'user2@mail.ru', password: 'user321', userName: 'user2', historyBooking: [] }
		]
	}
}

let UsersDeduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER: {
			return {
				...state,
				data: {
					dataUser: [...state.data.dataUser, {
						id: state.data.dataUser[state.data.dataUser.length - 1].id + 1,
						login: action.user.login,
						password: action.user.password,
						userName: action.user.nickName,
						historyBooking: []
					}]
				}
			}
		}
		case SET_BOOKING_USER: {
			let afterDataUser = JSON.parse(JSON.stringify(state.data.dataUser))
			let index = afterDataUser.findIndex(el => el.id === action.id)
			afterDataUser[index].historyBooking.push(action.data)
			return {
				...state,
				data: {
					dataUser: afterDataUser
				}
			}
		}
		case EXIT_BOOKING: {
			let dataUser = JSON.parse(JSON.stringify(state.data.dataUser))
			let index = dataUser.findIndex(el => el.id === action.idUser)
			dataUser[index].historyBooking[dataUser[index].historyBooking.length - 1].end = action.date
			return {
				...state,
				data: {
					...state.data,
					dataUser
				}
			}
		}
		case DELETE_USER: {
			let dataUser = JSON.parse(JSON.stringify(state.data.dataUser))
			dataUser = dataUser.filter(el => el.id !== action.id)
			return {
				...state,
				data: {
					...state.data,
					dataUser
				}
			}
		}
		default: return state;
	}
}

export const addUser = (user) => ({ type: ADD_USER, user })
export const setBookingUser = (data, id) => ({ type: SET_BOOKING_USER, data, id })
export const exitBooking = (idUser, date) => ({ type: EXIT_BOOKING, idUser, date })
export const deleteUser = (id) => ({ type: DELETE_USER, id })

export default UsersDeduser;

