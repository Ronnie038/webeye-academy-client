import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/authProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Profile = () => {
	const { user, updateUserProfile, logOut, toggleDiv, toggle } =
		useContext(AuthContext);
	console.log(user);
	const [show, setShow] = useState(false);
	const [error, setError] = useState('');
	const [checkoutInput, setCheckoutInput] = useState({
		name: user?.displayName,
		lastname: '',
		photoURL: user?.photoURL,
		phone: '',
		email: user?.email,
	});
	console.log(checkoutInput.email);
	// console.log(checkoutInput.photoURL, checkoutInput.name);

	const handleInput = (e) => {
		e.preventDefault();
		setCheckoutInput({
			...checkoutInput,
			[e.target.name]: e.target.value,
			[e.target.image_url]: e.target.value,
		});
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// console.log(user);

	const navigate = useNavigate();

	const style = {
		position: 'absolute',
		top: '1rem',
		right: '1rem',
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const displayName = form.name.value;
		const photoURL = form.photoURL.value;
		updateUserProfile({ displayName, photoURL })
			.then(() => {
				toast.success('you have successfully updated Your profile');
				navigate('/profile');
				handleClose(true);
			})
			.catch((error) => setError(error.code));
	};
	if (!user) {
		navigate('/courses');
	}

	return (
		<div>
			<div
				className={`${toggleDiv} position-relative mx-auto responsive rounded p-5 `}
			>
				<Image
					style={{ height: '40px', width: '40px' }}
					roundedCircle
					className='mb-3'
					src={user?.photoURL}
				/>
				<p className='bg-secondary p-2 text-light rounded'>
					{user?.displayName}
				</p>
				<p className='bg-secondary p-2 text-light rounded'>{user?.email}</p>

				{/* modal for edit profiel */}
				<span onClick={handleShow} style={style}>
					Edit <BiEdit />
				</span>
				<Modal
					show={show}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Update profile</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={handleSubmit} className='p-4'>
							<Form.Group className='mb-3' controlId='formBasicName'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									className='b-none'
									name='name'
									onChange={handleInput}
									value={checkoutInput.name}
									type='text'
									placeholder='Enter Name'
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formBasicImageURL'>
								<Form.Label>Image URL</Form.Label>
								<Form.Control
									className='b-none'
									onChange={handleInput}
									value={checkoutInput.photoURL}
									type='text'
									name='photoURL'
									placeholder='img url'
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									className='b-none'
									disabled
									type='email'
									value={checkoutInput.email}
									name='email'
									placeholder='Enter email'
								/>
							</Form.Group>

							<Form.Group className='mb-3' controlId='formBasicCheckbox'>
								<small className='text-danger'>{error}</small>
							</Form.Group>
							<Button
								className='w-100 rounded-pill rounded'
								variant='primary'
								type='submit'
							>
								Submit
							</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default Profile;
