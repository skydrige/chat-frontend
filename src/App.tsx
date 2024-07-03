import Home from './components/Home';
// @ts-ignore
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/App.css';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={
					<Navigate to="/home" />
				} />
				<Route path="/home" element={
					<Home />
				} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
