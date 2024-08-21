import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import LoginRegister from './components/Auth/Login-Register';
import './assets/css/App.css';

function App() {

	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<ProtectedRoute>
							<Navigate to="/home" />
						</ProtectedRoute>
					} />
					<Route path="/home" element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					} />
					<Route path="/profile" element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					} />
					<Route path="/login-register" element={<LoginRegister />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;