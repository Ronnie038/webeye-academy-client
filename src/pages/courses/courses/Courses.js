import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category from '../../category/Category';
import RightSideNav from '../rightSideNav/RightSideNav';
import LeftSideNav from '../leftSideNav/LeftSideNav';

const Courses = () => {
	return (
		<div>
			<Container>
				<Row className='justify-content-md-center'>
					<Col xs lg='4'>
						<LeftSideNav />
					</Col>

					<Col xs lg='8'>
						<RightSideNav />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Courses;
