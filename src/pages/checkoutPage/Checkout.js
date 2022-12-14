import React, { useContext, useState } from 'react';
import { useLoaderData, Navigator, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Checkout = () => {
	const course = useLoaderData();
	const { user, toggle, toggleDiv } = useContext(AuthContext);
	const [error, setError] = useState([]);
	const [checkoutInput, setCheckoutInput] = useState({
		firstname: user?.displayName,
		lastname: '',
		phone: '',
		email: user?.email,
		address: '',
		city: '',
		state: '',
		zipcode: '',
	});
	const navigate = useNavigate();
	const handleInput = (e) => {
		e.preventDefault();
		setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success('you have successfully purches the order');
		navigate('/courses');
	};

	const handleCancel = () => {
		toast.error('you have successfully cancel the purches');
		navigate('/courses');
	};

	return (
		<div className={`responsive mx-auto ${toggle}`}>
			<div className={`card ${toggleDiv}`}>
				<div className={`card-body position-relative ${toggleDiv}`}>
					<span className='position-absolute end-0 me-5 p-2 bg-warning rounded text-dark'>
						total: {course.price}
					</span>
					<h4>Basic Information</h4>
					<p className='fw-bold text-danger'>Order for : {course.title}</p>
				</div>
				<div className={`card-body ${toggleDiv}`}>
					<form onSubmit={handleSubmit} className='row'>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> First Name</label>
								<input
									type='text'
									name='firstname'
									onChange={handleInput}
									value={checkoutInput.firstname}
									required
									placeholder='first name'
									className='form-control'
								/>
								<small className='text-danger'>{error.firstname}</small>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> Last Name</label>
								<input
									required
									type='text'
									name='lastname'
									onChange={handleInput}
									value={checkoutInput.lastname}
									placeholder='last name'
									className='form-control'
								/>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> Phone Number</label>
								<input
									required
									type='number'
									name='phone'
									onChange={handleInput}
									value={checkoutInput.phone}
									placeholder='phone'
									className='form-control'
								/>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> Email Address</label>
								<input
									required
									type='email'
									onChange={handleInput}
									value={checkoutInput.email}
									placeholder='email'
									name='email'
									className='form-control text-dark'
								/>
							</div>
						</div>
						<div className='col-md-12'>
							<div className='form-group mb-3'>
								<label> Full Address</label>
								<textarea
									required
									rows='3'
									name='address'
									className='form-control'
									onChange={handleInput}
									value={checkoutInput.address}
									placeholder='address'
								></textarea>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='form-group mb-3'>
								<label>City</label>
								<input
									required
									type='text'
									name='city'
									onChange={handleInput}
									value={checkoutInput.city}
									className='form-control'
									placeholder='city'
								/>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='form-group mb-3'>
								<label>State</label>
								<input
									required
									type='text'
									onChange={handleInput}
									value={checkoutInput.state}
									name='state'
									className='form-control'
									placeholder='state'
								/>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='form-group mb-3'>
								<label>Zip Code</label>
								<input
									required
									type='text'
									onChange={handleInput}
									value={checkoutInput.zipcode}
									name='zipcode'
									className='form-control'
									placeholder='zip code'
								/>
							</div>
						</div>
						<div className='col-md-12'>
							<div className='form-group text-end'>
								<button type='submit' className='btn btn-primary mx-1'>
									Place Order
								</button>
								<button onClick={handleCancel} className='btn btn-danger mx-1'>
									Cancel Order
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
