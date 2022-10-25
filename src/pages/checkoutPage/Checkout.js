import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
	const course = useLoaderData();

	return (
		<div className='responsive mx-auto'>
			<div className='card '>
				<div className='card-header'>
					<h4>Basic Information</h4>
					<p className='fw-bold text-danger'>Order for : {course.title}</p>
				</div>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> First Name</label>
								<input type='text' name='firstname' className='form-control' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> Last Name</label>
								<input type='text' name='lastname' className='form-control' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> Phone Number</label>
								<input type='number' name='phone' className='form-control' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group mb-3'>
								<label> Email Address</label>
								<input type='email' name='email' className='form-control' />
							</div>
						</div>
						<div className='col-md-12'>
							<div className='form-group mb-3'>
								<label> Full Address</label>
								<textarea
									rows='3'
									name='address'
									className='form-control'
								></textarea>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='form-group mb-3'>
								<label>City</label>
								<input type='text' name='city' className='form-control' />
							</div>
						</div>
						<div className='col-md-4'>
							<div className='form-group mb-3'>
								<label>State</label>
								<input type='text' name='state' className='form-control' />
							</div>
						</div>
						<div className='col-md-4'>
							<div className='form-group mb-3'>
								<label>Zip Code</label>
								<input type='text' name='zipcode' className='form-control' />
							</div>
						</div>
						<div className='col-md-12'>
							<div className='form-group text-end'>
								<button type='button' className='btn btn-primary mx-1'>
									Place Order
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
