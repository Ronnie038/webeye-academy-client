import { createBrowserRouter, Link } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/blog/Blog';
import Checkout from '../pages/checkoutPage/Checkout';
import Course from '../pages/courses/courseDetails/CourseDetails';
import Courses from '../pages/courses/courses/Courses';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Profile from '../pages/others/profile/Profile';
import Register from '../pages/register/Register';
import PrivateRoute from './privateRoute/PrivateRoute';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: (
			<div className='text-danger min-vh-100 flex-column d-flex align-items-center justify-content-center'>
				<h1> 404 not found</h1>
				<br />
				<Link to='../' className='text-light pointer-event border-bottom'>
					go Home
				</Link>
			</div>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'courses',
				element: <Courses />,
			},
			{
				path: 'course/:id',
				element: <Course />,
				loader: ({ params }) =>
					fetch(
						`https://web-eye-academy-server.vercel.app/courses/${params.id}`
					),
			},
			{
				path: 'checkout/:id',
				element: (
					<PrivateRoute>
						<Checkout />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://web-eye-academy-server.vercel.app/courses/${params.id}`
					),
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
		],
	},
]);
