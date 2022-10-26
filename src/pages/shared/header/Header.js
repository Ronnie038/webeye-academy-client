import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

import logo from '../../../assets/logo/logo.png';
import { FaUser } from 'react-icons/fa';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/AuthProvider';

const Header = () => {
	const { user, logOut, themeToggle, setThemeToggle, toggle, toggleDiv } =
		useContext(AuthContext);

	return (
		<Navbar
			collapseOnSelect
			sticky='top'
			expand='lg'
			// bg='light'

			variant='dark'
			className={`py-4 mb-5 shadow-sm ${toggleDiv}`}
		>
			<Container className={`${toggle}`}>
				<Link to='/'>
					<h4 className={toggle}>
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
					<Nav className='me-auto   ms-5'>
						<div className=''>
							<Link to='/courses' className={` fs-5 fw-bold ${toggle}`}>
								{' '}
								Courses
							</Link>
						</div>
					</Nav>
					<Nav>
						<div className=''>
							{user ? (
								<Link onClick={logOut} className={`${toggle} fw-bold`}>
									SignOut
								</Link>
							) : (
								<>
									<Link to='/login' className={`me-3 ${toggle}`}>
										Login
									</Link>
								</>
							)}
							{user?.photoURL ? (
								<Link to='/profile' className='ms-3'>
									<Image
										style={{ height: '40px', width: '40px' }}
										roundedCircle
										title={user.displayName}
										src={user.photoURL}
									/>
								</Link>
							) : (
								<FaUser />
							)}
						</div>
						<button
							onClick={() => setThemeToggle(!themeToggle)}
							className='btn'
						>
							{themeToggle ? (
								<span className='bg-dark rounded-circle text-light p-2'>
									dark
								</span>
							) : (
								<span className='bg-light text-dark rounded-circle p-2'>
									light
								</span>
							)}
						</button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
