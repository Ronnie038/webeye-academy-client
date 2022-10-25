import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div
			className=' w-75  rounded my-5 m-auto b-none'
			style={{ backgroundColor: 'white' }}
		>
			<div className=' card mb-3'>
				<div className='row g-0'>
					<div className='col-md-5'>
						<img
							src='https://images.unsplash.com/photo-1572294846914-4b5092cf5fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
							className='img-fluid   rounded-start '
							alt='...'
						/>
					</div>
					<div className='col-md-7'>
						<div className='card-body'>
							<Card.Title className='text-center'>Login here</Card.Title>
							<Form className='p-4'>
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
								<div className=' mt-2 d-flex justify-content-around'>
									<p>New here? </p>
									<Link to='/register' className='text-info fw-bold'>
										{' '}
										Register
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
	);
};

export default Login;
