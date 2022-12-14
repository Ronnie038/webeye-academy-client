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

	const active = (isActive) => ({
		color: isActive ? 'cyan' : 'blue',
	});

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
							<NavLink
								style={active}
								to='/courses'
								className={` fs-5 fw-bold ${toggle}`}
							>
								{' '}
								Courses
							</NavLink>
						</div>
						<div className='ms-3'>
							<NavLink
								style={active}
								to='/blog'
								className={` fs-5 fw-bold ${toggle}`}
							>
								{' '}
								Blog
							</NavLink>
						</div>
						<div className='ms-3'>
							<NavLink
								style={active}
								to='/'
								className={` fs-5 fw-bold ${toggle}`}
							>
								{' '}
								FAQ
							</NavLink>
						</div>
					</Nav>
					<Nav>
						<div className=''>
							{user ? (
								<Link
									onClick={logOut}
									className={`${toggle} p-2 fw-bold bg-danger rounded-pill`}
								>
									SignOut
								</Link>
							) : (
								<>
									<Link
										to='/login'
										className={`me-3 bg-info p-2 px-3 rounded-pill ${toggle}`}
									>
										Login
									</Link>
								</>
							)}
							{user?.photoURL ? (
								<NavLink style={active} to='/profile' className='ms-3'>
									<Image
										style={{ height: '50px', width: '50px' }}
										roundedCircle
										title={user.displayName}
										src={user.photoURL}
									/>
								</NavLink>
							) : (
								<FaUser />
							)}
							<div
								onClick={() => setThemeToggle(!themeToggle)}
								className='py-3 px-4  rounded-pill toggle_btn'
								style={{ width: '8px', height: '3px' }}
							>
								{themeToggle ? (
									<div className='dark_toggle'></div>
								) : (
									<div
										// style={{ width: '3px', height: '3px' }}
										className='light_toggle'
									></div>
								)}
							</div>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
