import React from 'react'
import { Carousel } from 'react-bootstrap'
function ProfilePhotos({profile}) {
	return (
		<div className="photos">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={profile.imageUrl}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={profile.imageUrl}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={profile.imageUrl}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default ProfilePhotos
