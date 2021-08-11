const SET_MESSAGE = 'SET_MESSAGE'
const initialState = {
	data: {
		text: '',
		date: '',
		demonstrate: false
	}
}

let MessageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGE: {
			return {
				...state,
				data: action.data
			}
		}
		default: return state
	}
}

export const setMessageData = (data) => ({ type: SET_MESSAGE, data })

export const setMessage = (data) => (dispatch) => {
	dispatch(setMessageData(data))
	setTimeout(() => {
		dispatch(setMessageData({
			text: '',
			date: '',
			demonstrate: false
		}))
	}, 2500)

}
export default MessageReducer