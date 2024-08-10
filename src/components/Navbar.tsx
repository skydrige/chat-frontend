import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import sidebarIcon from '../assets/sidebar.png';
import '../assets/css/App.css';
import { Link } from "react-router-dom";
import Sungjinwoo from '../assets/SungJinwoo.png';

interface NavbarProps {
	onToggleSidebar: () => void;
	isRotated?: boolean;
}

const NavbarComponent: React.FC<NavbarProps> = ({ onToggleSidebar, isRotated }) => {
	const handleClick = () => {
		onToggleSidebar();
	};

	return (
		<Navbar className={"navbar"} expand="lg">
			<Button onClick={handleClick} className="ms-3" style={{ background: "inherit", border: "none" }}>
				<img src={sidebarIcon} alt="Toggle Sidebar" className={`toggle-icon ${isRotated ? 'rotate' : '' }`} />
			</Button>
			<Link to="/home" style={{ textDecoration: 'none' }}>
				<Navbar.Brand className="navbar-brand ms-3">Chat App</Navbar.Brand>
			</Link>
			<div className="ms-auto m-1">
				<img className={"avatar rounded-circle me-3"} style={{ width: "30px", height: "30px" }} src={Sungjinwoo} alt={"Avatar"} />
			</div>
		</Navbar>
	);
};

export default NavbarComponent;