const SET_USER = 'SET_USER'

let initialState = {
	data: {
		dataUser: [
			{ login: 'user@mail.ru', password: 'user123', userName: 'user', historyBooking: [{ start: '05.08.2021 12:00', end: '05.08.2021 15:00', carModel: 'Mazda' }] }
		]
	}
}

let UsersDeduser = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default UsersDeduser;