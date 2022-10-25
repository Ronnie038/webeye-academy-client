import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
	const { createUser, updateUserProfile, varifyEmail } =
		useContext(AuthContext);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const photoURL = form.image_url.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ name, photoURL });

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				handleUpdateUserProfile(name, photoURL);
				handleEmailVarification();
				navigate('/login');
				toast.success('please varify your email address  ');
			})
			.catch((err) => {
				setError(err.code);
			});
	};
	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleEmailVarification = () => {
		varifyEmail()
			.then(() => {})
			.catch((err) => console.error(err));
	};

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
								<Form onSubmit={handleSubmit} className='p-4'>
									<Form.Group className='mb-3' controlId='formBasicName'>
										<Form.Label>Name</Form.Label>
										<Form.Control
											className='b-none'
											name='name'
											type='text'
											placeholder='Enter Name'
										/>
									</Form.Group>
									<Form.Group className='mb-3' controlId='formBasicImageURL'>
										<Form.Label>Image URL</Form.Label>
										<Form.Control
											className='b-none'
											type='text'
											name='image_url'
											placeholder='img url'
										/>
									</Form.Group>
									<Form.Group className='mb-3' controlId='formBasicEmail'>
										<Form.Label>Email address</Form.Label>
										<Form.Control
											className='b-none'
											type='email'
											name='email'
											placeholder='Enter email'
										/>
									</Form.Group>

									<Form.Group className='mb-3' controlId='formBasicPassword'>
										<Form.Label>Password</Form.Label>
										<Form.Control
											className='border-bottom'
											type='password'
											name='password'
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
									<div className=' mt-2 d-flex gap-3'>
										<p>Already have an account? </p>
										<Link to='/login' className=' fw-bold text-primary'>
											{' '}
											Login
										</Link>
									</div>
									<div className='text-center'>
										<hr />
										<p>Or</p>
										<p>Sign up with</p>
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
