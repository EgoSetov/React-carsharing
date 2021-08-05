const GET_ACCOUNT = 'GET_ACCOUNT'

let initialState = {
	data: {
		authorized: false,
		dataUser: []
	}
}

let AccountReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default AccountReducer;