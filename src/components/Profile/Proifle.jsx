import React from 'react'
import './Profile.css'
import ProfilePhotos from './Profile-photos/ProfilePhotos'
import ProfileInfo from './Profile-info/ProfileInfo'
import Spinner from '../Spinner/Spinner'

function Proifle(props) {

	if (JSON.stringify(props.profileCar) === '{}' || !props.profileCar) return <div className="container"><Spinner></Spinner></div>

	return (
		<div className="container containerCastom">
			<ProfileInfo {...props}></ProfileInfo>
			<ProfilePhotos {...props}></ProfilePhotos>
		</div>
	)
}

export default Proifle
