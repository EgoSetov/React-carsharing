import React from 'react'
import './Profile.css'
import ProfilePhotos from './Profile-photos/ProfilePhotos'
import ProfileInfo from './Profile-info/ProfileInfo'
import Spinner from '../Spinner/Spinner'

function Proifle({ profile }) {

	if (JSON.stringify(profile) === '{}' || !profile) return <div className="container"><Spinner></Spinner></div>

	return (
		<div className="container containerCastom">
			<ProfileInfo profile={profile}></ProfileInfo>
			<ProfilePhotos profile={profile}></ProfilePhotos>
		</div>
	)
}

export default Proifle
