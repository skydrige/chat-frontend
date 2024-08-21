import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Login from "./Login";
import Register from "./Register";
import '../../assets/css/Login-Register.css';

function LoginRegister() {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<Container className={"login-register-container"}>
			{showLogin ? <Login onSwitch={() => setShowLogin(false)} /> : <Register onSwitch={() => setShowLogin(true)} />}
		</Container>
	);
}

export default LoginRegister;