import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		fetch('https://web-eye-academy-server.vercel.app/courses-categories')
			.then((res) => res.json())
			.then((data) => setCategory(data));
	}, []);
	return (
		<div>
			<h4>All Courses listed below </h4>
			<ul>
				{categories.map((category) => (
					<>
						<Link to={`course/${category.id}`}>
							<li>{category.name}</li>
						</Link>
					</>
				))}
			</ul>
		</div>
	);
};

export default Category;
