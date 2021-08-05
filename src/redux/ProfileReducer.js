
const SET_PROFILE_CAR = 'SET_PROFILE_CAR'
const initialState = {
	data: {
		prifleCar: null
	}
}

let ProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE_CAR:
			return {
				...state,
				profileNow: action.profile
			}
		default: return state
	}
}

export const setProfileCar = (profile) => ({type: SET_PROFILE_CAR, profile})
export default ProfileReducer