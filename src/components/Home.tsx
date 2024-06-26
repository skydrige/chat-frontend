import {useState, useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Navbar';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import '../assets/css/App.css';

function Home() {
	const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);
	const sidebarRef = useRef<HTMLElement | null>(null); // specify type here

	const handleToggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => { // specify type here
			if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) { // cast event.target to Node
				if (window.innerWidth <= 768) { // check if in mobile view
					setSidebarVisible(false); // close the sidebar when click outside
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
				// console.log('Mobile View');
				sidebar.style.position = 'fixed';
				sidebar.style.zIndex = '1';
				mainContent.style.marginLeft = `${sidebarWidth}px`;
			}
			else {
				// console.log('Desktop View');
				sidebar.style.position = 'relative';
				sidebar.style.zIndex = '0';
				mainContent.style.marginLeft = '0';
			}
		}
	}, [sidebarVisible]);

	return (
		<div>
			<NavbarComponent onToggleSidebar={handleToggleSidebar} />

			<Container fluid className="main-container">
				<Row className="main-row">
					<Col xs={2} className={`sidebar-column p-4 ${sidebarVisible ? 'show' : 'hide'}`} ref={sidebarRef}>
						<Sidebar/>
					</Col>

					<Col xs={sidebarVisible ? 10 : 12} className="main-content p-2 m-2">
						<ChatArea />
						<ChatInput />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Home;
