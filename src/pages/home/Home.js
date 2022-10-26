import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { AuthContext } from '../../context/authProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
	const { toggle, toggleDiv, themeToggle } = useContext(AuthContext);
	return (
		<div className={`home ${toggleDiv} ${toggle}`}>
			<Container>
				<Row className='mt-5'>
					<Col xs={{ order: 'last', span: '12' }} md={{ span: '6' }}>
						<div className={themeToggle ? 'light_blue_div' : 'dark_blue_div'}>
							<h3 className={toggle}>welcome to webEye academy</h3>
							<p>
								Welcome to webEye academy enginieering course. we are excited
								about teaching this course and hope you are equally excited
								about taking it. this course is an asynchronous online course.
								What this means is that we will not have face-to-face class
								meetings.
							</p>
							<p>after classes we provide you notes</p>
							<Link to='/courses'>
								<div className='btn btn-lg bg-info '>Explore</div>
							</Link>
						</div>
					</Col>
					<Col md={{ order: 'last' }} xs>
						{' '}
						<Carousel>
							<Carousel.Item interval={5000}>
								<img
									className='d-block w-100'
									src='https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Image-File.png'
									alt='Second slide'
								/>
							</Carousel.Item>
							<Carousel.Item interval={5000}>
								<img
									className='d-block w-100'
									src='https://www.pngall.com/wp-content/uploads/5/Education-Learning-PNG-HD-Image.png'
									alt='Second slide'
								/>
							</Carousel.Item>
							<Carousel.Item interval={5000}>
								<img
									className='d-block w-100'
									src='https://www.pngall.com/wp-content/uploads/5/Education-Learning-PNG-Photo.png'
									alt='Third slide'
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
