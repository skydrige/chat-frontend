// components/Sidebar.tsx
import React from 'react';
import {useNavigate} from "react-router-dom";
import '../assets/css/App.css';
import { Button } from "react-bootstrap";

interface SidebarProps {
	label: string;
	val ?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ label, val}) => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		if (val) {
			navigate("/profile");
		} else {
			navigate("/home");
		}
	};

	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<Button>New Chat</Button>
			</div>
			<div className={"sidebar-content"}>
				<Button style={{ marginTop: "8px" }}>Chat - 1</Button>
				<Button>Chat - 2</Button>
				<Button>Chat - 3</Button>
				<Button>Chat - 4</Button>
				<Button>Chat - 5</Button>
				<Button>Chat - 6</Button>
				<Button>Chat - 7</Button>
				<Button>Chat - 8</Button>
				<Button>Chat - 9</Button>
				<Button>Chat - 10</Button>
				<Button>Chat - 11</Button>
				<Button>Chat - 12</Button>
			</div>
			<div className={"sidebar-footer"}>
				<Button onClick={handleNavigation}>{label}</Button>
				<Button>Logout</Button>
			</div>
		</div>
	);
}

export default Sidebar;