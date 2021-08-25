import React from 'react'
import { Carousel } from 'react-bootstrap'
function ProfilePhotos({profileCar}) {
	return (
		<div className="photos">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={profileCar.imageUrl}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={profileCar.imageUrl}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={profileCar.imageUrl}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default ProfilePhotos
