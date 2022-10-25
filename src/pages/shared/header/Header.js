import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar
			collapseOnSelect
			sticky='top'
			expand='lg'
			// bg='light'
			style={{
				background: 'rgb(116,126,172)',
				background:
					'linear-gradient(0deg, rgba(116,126,172,1) 100%, rgba(16,7,89,1) 100%)',
			}}
			variant='dark'
			className='py-4 mb-5'
		>
			<Container>
				<Link to='/home'>
					<h4 className='text-dark'>
						<img
							src={logo}
							alt='logo'
							title='logo'
							className='rounded-5'
							style={{ width: '70px' }}
						/>
						WebEye Academy
					</h4>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto   me-5'>
						<div className=''>
							<Link
								to='/courses'
								className='text-dark fs-5 fw-bold text-secondary'
							>
								{' '}
								Courses
							</Link>
						</div>
					</Nav>
					<Nav>
						<div className=''>
							<Link
								to='/login'
								className='text-dark fs-5 fw-bold text-secondary'
							>
								Login
							</Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
