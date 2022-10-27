import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Header from '../pages/shared/header/Header';

const Main = () => {
	return (
		<div className=' min-vh-100 d-flex flex-column justify-content-between'>
			<div className=''>
				<Header />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
