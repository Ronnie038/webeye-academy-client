import React, { useContext } from 'react';
import './Course.css';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { GrDiamond } from 'react-icons/gr';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Pdf from 'react-to-pdf';
import { AuthContext } from '../../../context/authProvider/AuthProvider';

const ref = React.createRef();

const Course = () => {
	const course = useLoaderData();
	const { _id, title, image_url, details, courses, price } = course;
	const { toggle, toggleDiv } = useContext(AuthContext);
	return (
		<div className={`min-vh-100 ${toggle}`}>
			<Card className='mx-auto responsive mb-5'>
				<Card.Body className={toggleDiv}>
					<Pdf targetRef={ref} filename='webEye-course.pdf'>
						{({ toPdf }) => (
							<button onClick={toPdf} className='btn btn-secondary '>
								<BsFillArrowDownCircleFill className='me-2 fs-3 text-warning' />
								Pdf
							</button>
						)}
					</Pdf>
				</Card.Body>
				<Card.Img variant='top' src={image_url} />
				<Card.Body className={`${toggleDiv} ${toggle}`} ref={ref}>
					<Card.Title>{title}</Card.Title>
					<Card.Text ref={ref}>{details}</Card.Text>
					<ListGroup className='list-group-flush p-3'>
						<p className='ms-3 text-primary fw-bold'>Include subjects</p>
						<ul>
							{courses.map((sub, idx) => (
								<li key={idx}>{sub}</li>
							))}
						</ul>
					</ListGroup>
				</Card.Body>
				<Card.Body className={`${toggleDiv}`}>
					<div className=''>
						<Link to={`/checkout/${_id}`}>
							<button className='btn btn-warning'>
								Get The premium access <GrDiamond />
							</button>
						</Link>

						<span className='bg-info ms-5 text-dark p-2 rounded'>
							price: {price}
						</span>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Course;
