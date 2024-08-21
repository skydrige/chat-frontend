import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { HandleLogin } from './Handle';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface LoginProps {
	onSwitch: () => void;
}

function Login({ onSwitch }: LoginProps) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { login, logout } = useAuth();

	const onSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		if (!username || !password) {
			alert('Please fill in all fields');
			return;
		}
		const loginResult = await HandleLogin(username, password);
		if (loginResult) {
			login();
			navigate('/home');
		} else {
			logout();
			// onSwitch();
		}
	};

	return (
		<Form className="auth-form" onSubmit={onSubmit}>
			<h3 className="text-center mb-4">Login</h3>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control type="text" placeholder="Email" value={username} onChange={e => setUsername(e.target.value)} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
			</Form.Group>
			<Button type="submit" className="w-100 mt-4">
				Log In
			</Button>
			<Button onClick={onSwitch} className="w-100 mt-3">
				Go to Register
			</Button>
		</Form>
	);
}

export default Login;