import React from 'react'
import AdminPanel from './AdminPanel'
import { connect } from 'react-redux'

function AdminPanelContainer(props) {
	let users = props.users.filter(el => el.login !== 'admin@mail.ru')
	return <AdminPanel {...props} users={users} />
}

let mapStateToProps = (state) => ({
	adminAccount: (state.account.data.dataUser.login === 'admin@mail.ru'),
	users: state.users.data.dataUser,
	cars: state.cars.data.cars
})

export default connect(mapStateToProps, {

})(AdminPanelContainer)
