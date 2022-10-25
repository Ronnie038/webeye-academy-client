import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
	const [categories, setCategory] = useState([]);
	// console.log(categories);

	useEffect(() => {
		fetch('http://localhost:5000/courses-categories')
			.then((res) => res.json())
			.then((data) => setCategory(data));
	}, []);
	return (
		<div>
			<h4>All Courses listed below </h4>
			<ul>
				{categories.map((category) => (
					<Link key={category.id} to={`/course/${category.id}`}>
						<li>{category.name}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default LeftSideNav;
