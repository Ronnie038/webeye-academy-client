import React, { useEffect, useState } from 'react';
import CourseSammary from '../../courseSummery/CourseSammary';

const RightSideNav = () => {
	const [courses, setCourses] = useState([]);
	console.log(courses);

	useEffect(() => {
		fetch('http://localhost:5000/category/all')
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	return (
		<div className='container text-center'>
			<div className='row '>
				{courses.map((course) => (
					<div key={course._id} className='col col-md-6'>
						<CourseSammary course={course} />
					</div>
				))}
			</div>
		</div>
	);
};

export default RightSideNav;
