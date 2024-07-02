// components/Sidebar.tsx
import React from 'react';
import '../assets/css/App.css';
import {Button} from "react-bootstrap";

const Sidebar: React.FC = () => {
	return (
		<div className="sidebar">
			<Button className={"new-chat"}>
				New Chat
			</Button>
		</div>
	);
}

export default Sidebar;
