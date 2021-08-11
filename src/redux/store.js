import { applyMiddleware, combineReducers, createStore } from "redux";
import middleware from "redux-thunk";
import AccountReducer from "./AccountReducer";
import CarsReducer from './CarsReducer'
import ProfileReducer from "./ProfileReducer";
import UsersDeduser from "./UsersReducer";
import MessageReducer from "./MessageReducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	cars: CarsReducer,
	profile: ProfileReducer,
	users: UsersDeduser,
	account: AccountReducer,
	message: MessageReducer,
	form: formReducer
})

let store = createStore(reducers, applyMiddleware(middleware))

window.store = store;
export default store;