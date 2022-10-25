import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const CourseSammary = ({ course }) => {
	const { _id, title, details, image_url } = course;
	return (
		<div className='mb-3'>
			<CardGroup>
				<Card>
					<Card.Img variant='top' style={{ height: '200px' }} src={image_url} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{details ? details.slice(0, 150) : details}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to={`/course/${_id}`}>
							<button className='btn btn-primary'> visite to details</button>
						</Link>
					</Card.Footer>
				</Card>
			</CardGroup>
		</div>
	);
};

export default CourseSammary;
