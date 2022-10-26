import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/blog/Blog';
import Checkout from '../pages/checkoutPage/Checkout';
import Course from '../pages/courses/course/Course';
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
		children: [
			{
				index: true,
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
