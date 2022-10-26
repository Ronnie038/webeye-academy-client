import { RouterProvider } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './context/authProvider/AuthProvider';

function App() {
	const { themeToggle } = useContext(AuthContext);
	return (
		<div className={`App ${themeToggle ? 'bg-light' : 'bg-dark'}`}>
			<RouterProvider router={routes} />
			<Toaster />
		</div>
	);
}

export default App;
