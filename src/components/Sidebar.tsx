// components/Sidebar.tsx
import React from 'react';
import '../assets/css/App.css';
import {Button} from "react-bootstrap";

const Sidebar: React.FC = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<Button>New Chat</Button>
			</div>
			<div className={"sidebar-content"}>
				<Button>Home</Button>
				<Button>Profile</Button>
				<Button>Settings</Button>
				<Button>Logout</Button>
			</div>
		</div>
	);
}

export default Sidebar;
