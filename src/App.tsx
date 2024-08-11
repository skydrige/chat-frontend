import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/App.css';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={
					<Home />
				} />
				<Route path="/" element={
					<Navigate to="/home" />
				} />
				<Route path="/profile" element={
					<Profile />
				} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;