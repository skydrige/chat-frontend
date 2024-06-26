// components/Navbar.tsx
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import sidebarIcon from '../assets/sidebar.png';
import '../assets/css/App.css';
interface NavbarProps {
	onToggleSidebar: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
	const [isRotated, setIsRotated] = React.useState(true);

	const handleClick = () => {
		onToggleSidebar();
		setIsRotated(!isRotated);
	};

	return (
		<Navbar className={"navbar"} expand="lg">
			<Button onClick={handleClick} className="ms-3" style={{ background: "inherit", border: "none" }}>
				<img src={sidebarIcon} alt="Toggle Sidebar" className={`toggle-icon ${isRotated ? 'rotate' : '' }`} />
			</Button>
			<Navbar.Brand href="#" className="navbar-brand ms-3">Chat App</Navbar.Brand>
		</Navbar>
	);
};

export default NavbarComponent;
