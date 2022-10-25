import { RouterProvider } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<div className='App'>
			<RouterProvider router={routes} />
			<Toaster />
		</div>
	);
}

export default App;
