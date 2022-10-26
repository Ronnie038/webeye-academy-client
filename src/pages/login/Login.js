import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-hot-toast';

import { AuthContext } from '../../context/authProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
	const { signIn, setLoading, providerLogin, toggle, toggleDiv } =
		useContext(AuthContext);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				if (!user.emailVerified) {
					navigate(from, { replace: true });
					toast('please verify the email');
				}
			})
			.catch((error) => {
				setError(error.code);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const gogleAuthProvider = new GoogleAuthProvider();

	const handleGoogleSignIn = () => {
		providerLogin(gogleAuthProvider)
			.then((result) => {
				console.log(result.user);
				navigate(from, { replace: true });
			})
			.catch((eror) => console.error(eror));
	};
	const handleGithubSignIn = () => {
		providerLogin(new GithubAuthProvider())
			.then((result) => {
				console.log(result.user);
				navigate(from, { replace: true });
			})
			.catch((eror) => console.error(eror));
	};
	return (
		<div
			className={`${toggle} w-75  rounded my-5 m-auto b-none`}
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
						<div className={`${toggleDiv} card-body`}>
							<Card.Title className='text-center'>Login here</Card.Title>
							<Form onSubmit={handleSubmit} className='p-4'>
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
									<strong className='text-danger'>{error.slice(5)}</strong>
								</Form.Group>
								<Button
									className='w-100 rounded-pill rounded'
									variant='primary'
									type='submit'
								>
									Submit
								</Button>
								<div className=' mt-2 d-flex '>
									<p>New here? </p>
									<Link to='/register' className='text-info fw-bold mx-3'>
										{' '}
										Register
									</Link>
								</div>
								<div className='text-center'>
									<hr />
									<p>Or</p>
									<p>Login with</p>
									<button
										onClick={handleGoogleSignIn}
										className='btn btn-secondary'
									>
										<FcGoogle className='b-none' /> <span>Google</span>
									</button>

									<button
										onClick={handleGithubSignIn}
										className='btn bg-secondary text-light ms-3'
									>
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
