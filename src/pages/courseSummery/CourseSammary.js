import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';

const CourseSammary = ({ course }) => {
	const { _id, title, details, image_url, price } = course;
	const { toggle, toggleDiv } = useContext(AuthContext);
	return (
		<div className={` mb-3 ${toggle}`}>
			<CardGroup>
				<Card>
					<Card.Img variant='top' style={{ height: '200px' }} src={image_url} />
					<Card.Body className={`${toggleDiv}`}>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{details ? details.slice(0, 150) : details}</Card.Text>
					</Card.Body>
					<Card.Body className={`${toggleDiv}`}>
						<Link to={`/course/${_id}`}>
							<button className='btn btn-primary'> visite to details</button>
						</Link>
						<span className='ms-5 bg-warning p-1 text-dark rounded'>
							{price}
						</span>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
};

export default CourseSammary;
