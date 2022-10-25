import { RouterProvider } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes/Routes';

function App() {
	return (
		<div className='App'>
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
