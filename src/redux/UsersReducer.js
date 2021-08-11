const ADD_USER = 'ADD_USER'

let initialState = {
	data: {
		dataUser: [
			{ id: 1, login: 'user@mail.ru', password: 'user123', userName: 'user', historyBooking: [{ id: 1, start: '05.08.2021 12:00', end: '05.08.2021 15:00', carModel: 'Mazda' }] },
			{ id: 2, login: 'user2@mail.ru', password: 'user321', userName: 'user2', historyBooking: [{ id: 1, start: '05.08.2021 08:00', end: '05.08.2021 10:00', carModel: 'Mazda' }] }
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
		default: return state;
	}
}

export const addUser = (user) => ({ type: ADD_USER, user })

export default UsersDeduser;

