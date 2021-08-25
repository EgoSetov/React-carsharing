const SET_ACCOUNT = 'SET_ACCOUNT'
const SET_DATA_FORM = 'SET_DATA_FORM'
const CLEAR_DATA_USER = 'CLEAR_DATA_USER'
const SET_BOOKING = 'SET_BOOKING'
const SET_CAR_BOOKING = 'SET_CAR_BOOKING'

let initialState = {
	data: {
		authorized: false,
		dataUser: {},
		carBooking: {}
	},
	dataForm: {}
}

let AccountReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACCOUNT: {
			return {
				...state,
				data: { authorized: true, dataUser: action.data }
			}
		}
		case SET_DATA_FORM: {
			if (action.data) {
				return {
					...state,
					dataForm: action.data
				}
			}
			return state
		}
		case CLEAR_DATA_USER: {
			return {
				...state,
				data: {
					authorized: false,
					dataUser: {}
				},
				dataForm: {}
			}
		}
		case SET_BOOKING: {
			console.log(action.data);
			return {
				...state,
				data: { ...state.data, dataUser: { ...state.data.dataUser, historyBooking: [...state.data.dataUser.historyBooking, { ...action.data }] } },
				dataForm: { ...state.dataForm }
			}
		}
		case SET_CAR_BOOKING: {
			return {
				...state,
				data: {
					...state.data,
					carBooking: action.data
				}
			}
		}
		default: return state
	}
}

export const setAccount = (data) => ({ type: SET_ACCOUNT, data })
export const setDataForm = (data) => ({ type: SET_DATA_FORM, data })
export const clearDataUser = () => ({ type: CLEAR_DATA_USER })
export const setBooking = (data) => ({ type: SET_BOOKING, data })
export const setCarBooking = (data) => ({ type: SET_CAR_BOOKING, data })

export default AccountReducer;