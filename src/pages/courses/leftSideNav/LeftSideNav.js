import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/AuthProvider';

const LeftSideNav = () => {
	const [categories, setCategory] = useState([]);
	const { toggle, toggleLink, toggleLinkDiv } = useContext(AuthContext);
	// console.log(categories);

	useEffect(() => {
		fetch('http://localhost:5000/courses-categories')
			.then((res) => res.json())
			.then((data) => setCategory(data));
	}, []);
	return (
		<div className={`${toggleLinkDiv}`}>
			<h4>All Courses listed below </h4>
			<ul>
				{categories.map((category) => (
					<Link key={category.id} to={`/course/${category.id}`}>
						<li className={`${toggle} ${toggleLink}`}>{category.name}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default LeftSideNav;
