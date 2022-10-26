import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AuthContext } from '../../context/authProvider/AuthProvider';
const Blog = () => {
	const { toggle, toggleDiv } = useContext(AuthContext);
	return (
		<div>
			<Accordion>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>What is cors?</Accordion.Header>
					<Accordion.Body className={`${toggle} ${toggleDiv}`}>
						Cross-Origin Resource Sharing (CORS) is an HTTP-header based
						mechanism that allows a server to indicate any origins (domain,
						scheme, or port) other than its own from which a browser should
						permit loading resources..
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>
						Why are you using firebase? What other options do you have to
						implement authentication?
					</Accordion.Header>
					<Accordion.Body className={`${toggle} ${toggleDiv}`}>
						Firebase offers you features such as analytics, databases,
						communication, crashes notification and etc. It allows you to move
						and concentrate on your customers. Firebase is designed and scaled
						on Google resources, even with the largest apps. Firebase products
						run well with Android and iOS ........
						<br />
						alternativ
						<br />
						<ul>
							<li>MongoDb</li>
							<li>Oracle Database.</li>
							<li>Amazon Redshift.</li>
							<li>DataStax Enterprise.</li>
							<li>Redis Enterprise Cloud.</li>
							<li>Cloudera Enterprise Data Hub</li>
							<li>Db2.</li>
							<li>Db2.</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2'>
					<Accordion.Header>How does the private route work?</Accordion.Header>
					<Accordion.Body className={`${toggle} ${toggleDiv}`}>
						The private route component is similar to the public route, the only
						change is that redirect URL and authenticate condition. If the user
						is not authenticated he will be redirected to the login page and the
						user can only access the authenticated routes If he is authenticated
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='3'>
					<Accordion.Header>What is Node? How does Node work?</Accordion.Header>
					<Accordion.Body className={`${toggle} ${toggleDiv}`}>
						Node allows developers to write JavaScript code that runs directly
						in a computer process itself instead of in a browser. ........
						<br />
						It is a used as backend service where javascript works on the
						server-side of the application. This way javascript is used on both
						frontend and backend. Node. js runs on chrome v8 engine which
						converts javascript code into machine code, it is highly scalable,
						lightweight, fast, and data-intensive
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default Blog;
