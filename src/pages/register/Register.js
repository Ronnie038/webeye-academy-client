import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div>
			<div
				className=' w-75 rounded-4 my-5 m-auto '
				style={{ backgroundColor: 'white', overflow: 'hidden' }}
			>
				<div className='card mb-3' style={{ border: 'none' }}>
					<div className='row g-0'>
						<div className='col-md-5'>
							<img
								src='https://images.unsplash.com/photo-1572294846914-4b5092cf5fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
								className='img-fluid rounded-start h-100'
								alt='...'
							/>
						</div>
						<div className='col-md-7'>
							<div className='card-body'>
								<Card.Title className='text-center'>Register here</Card.Title>
								<Form className='p-4'>
									<Form.Group className='mb-3' controlId='formBasicEmail'>
										<Form.Label>Name</Form.Label>
										<Form.Control
											className='b-none'
											type='text'
											placeholder='Enter Name'
										/>
									</Form.Group>
									<Form.Group className='mb-3' controlId='formBasicEmail'>
										<Form.Label>Image URL</Form.Label>
										<Form.Control
											className='b-none'
											type='text'
											placeholder='img url'
										/>
									</Form.Group>
									<Form.Group className='mb-3' controlId='formBasicEmail'>
										<Form.Label>Email address</Form.Label>
										<Form.Control
											className='b-none'
											type='email'
											placeholder='Enter email'
										/>
									</Form.Group>

									<Form.Group className='mb-3' controlId='formBasicPassword'>
										<Form.Label>Password</Form.Label>
										<Form.Control
											className='border-bottom'
											type='password'
											placeholder='Password'
										/>
									</Form.Group>
									<Form.Group className='mb-3' controlId='formBasicCheckbox'>
										<Form.Check type='checkbox' label='Check me out' />
									</Form.Group>
									<Button
										className='w-100 rounded-pill rounded'
										variant='primary'
										type='submit'
									>
										Submit
									</Button>
									<div className=' mt-2 d-flex justify-content-between'>
										<p>Already have an account? </p>
										<Link to='/login' className='text-dark'>
											{' '}
											Login
										</Link>
									</div>
									<div className='text-center'>
										<hr />
										<p>Or</p>
										<p>Login with</p>
										<button className='btn btn-secondary'>
											<FcGoogle className='b-none' /> <span>Google</span>
										</button>

										<button className='btn'>
											<AiFillGithub />
											Github
										</button>
									</div>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
