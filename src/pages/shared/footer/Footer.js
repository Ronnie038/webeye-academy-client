import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AuthContext } from '../../../context/authProvider/AuthProvider';
import { FaLocationArrow, FaMale, FaPhone, FaVoicemail } from 'react-icons/fa';

const Footer = () => {
	const { toggle, toggleDiv, themeToggle } = useContext(AuthContext);

	return (
		<div
			className={`${
				themeToggle ? 'light_blue_footer' : 'dark_blue_footer'
			} p-4 mt-5`}
			style={{ zIndex: '100' }}
		>
			<Container className='text-center text-md-start'>
				<Row>
					<Col>
						<ul>
							<li>
								<FaLocationArrow /> Dhaka 1208
							</li>
							<li>
								<FaVoicemail /> webeye@gmail.com
							</li>
							<li>
								<FaPhone />: 02 84984
							</li>
						</ul>
					</Col>

					<Col xs={12} md={4}>
						<ul>
							<li>Blog</li>
							<li>Success</li>
							<li>Refund policy</li>
							<li>Refund </li>
						</ul>
					</Col>
					<Col>
						<img
							src='https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
							alt=''
							className='img-fluid w-50 rounded-2'
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<p className='text-center mt-3'>copyright ©️ 2022 WebEye-academy</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
