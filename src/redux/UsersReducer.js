const ADD_USER = 'ADD_USER'
const SET_BOOKING_USER = 'SET_BOOKING_USER'

let initialState = {
	data: {
		dataUser: [
			{ id: 1, login: 'user@mail.ru', password: 'user123', userName: 'user', historyBooking: [] },
			{ id: 2, login: 'user2@mail.ru', password: 'user321', userName: 'user2', historyBooking: [] }
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
						id: state.data.dataUser.length + 1,
						login: action.user.login,
						password: action.user.password,
						userName: action.user.nickName,
						historyBooking: []
					}]
				}
			}
		}
		case SET_BOOKING_USER: {
			// console.log(action.data);
			let afterDataUser = state.data.dataUser
			let indexUser = afterDataUser.findIndex(el => el.id === action.id)
			afterDataUser[indexUser].historyBooking.push(action.data)
			return {
				...state,
				data: {
					dataUser: afterDataUser
				}
			}
		}
		default: return state;
	}
}

export const addUser = (user) => ({ type: ADD_USER, user })
export const setBookingUser = (data, id) => ({ type: SET_BOOKING_USER, data, id })

export default UsersDeduser;

