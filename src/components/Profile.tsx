import { useState, useEffect } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Navbar';
import Sidebar from './Sidebar';
import '../assets/css/App.css';
import Sungjinwoo from "../assets/SungJinwoo.png";

function Profile() {
	const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);
	const [isRotated, setIsRotated] = useState(false);

	const handleToggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
		setIsRotated(!isRotated);
	};

	const resetRotation = () => {
		setIsRotated(false);
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const sidebar = document.querySelector('.sidebar-column') as HTMLElement;
			const toggleButton = document.querySelector('.toggle-icon') as HTMLElement;

			if (!sidebar.contains(event.target as Node) && !toggleButton.contains(event.target as Node)) {
				if (window.innerWidth < 768) {
					setSidebarVisible(false);
					resetRotation();
				}
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const sidebar = document.querySelector('.sidebar-column') as HTMLElement;
		const mainContent = document.querySelector('.main-content') as HTMLElement;

		if (sidebar && mainContent) {
			const sidebarWidth = sidebar.getBoundingClientRect().width;
			const mainContentWidth = mainContent.getBoundingClientRect().width;

			if (mainContentWidth < 360) {
				sidebar.style.position = 'fixed';
				sidebar.style.zIndex = '1';
				mainContent.style.marginLeft = `${sidebarWidth}px`;
			} else {
				sidebar.style.position = 'relative';
				sidebar.style.zIndex = '0';
				mainContent.style.marginLeft = '0';
			}
		}
	}, [sidebarVisible]);

	return (
		<div>
			<NavbarComponent onToggleSidebar={handleToggleSidebar} isRotated={isRotated} />

			<Container fluid className="main-container">
				<Row className="main-row">
					<Col xs={2} className={`sidebar-column p-4 ${sidebarVisible ? 'show' : 'hide'}`}>
						<Sidebar label = {"Home"} val = {false}/>
					</Col>

					<Col xs={sidebarVisible ? 10 : 12} className="main-content p-2 m-2">
						<div className={"profile-headers"}>
							<Button>Profile</Button>
							<Button>Save Changes</Button>
						</div>
						<div className={"profile-content"}>
							<div className={"avatar"}>
								<p className={"avatar-label"}>Profile Photo</p>
								<img className={"preview-avatar rounded-circle"} style={{width: "150px", height: "150px"}}
								     src={Sungjinwoo} alt={"Avatar"}/>
							</div>
							<div className={"edit-avatar"}>
								<Button className={"remove-photo"}>Remove Photo</Button>
								<Button className={"change-photo"}>Change Photo</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Profile;