import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Navbar';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import '../assets/css/App.css';

interface Message {
	sender: 'user' | 'system';
	text: string;
	hasWrapsOrIndents: boolean;
}

function Home() {
	const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);
	const [isRotated, setIsRotated] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);

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

	const handleUserMessage = (text: string) => {
		const hasWrapsOrIndents = /[\n\t]/.test(text);
		setMessages([...messages, { sender: 'user', text, hasWrapsOrIndents }, { sender: 'system', text: 'Error 404: Server Down', hasWrapsOrIndents: false }]);
	};

	return (
		<div>
			<NavbarComponent onToggleSidebar={handleToggleSidebar} isRotated={isRotated} />

			<Container fluid className="main-container">
				<Row className="main-row">
					<Col xs={2} className={`sidebar-column p-4 ${sidebarVisible ? 'show' : 'hide'}`}>
						<Sidebar label = {"Profile"} val = {true}/>
					</Col>

					<Col xs={sidebarVisible ? 10 : 12} className="main-content p-2 m-2">
						<ChatArea messages={messages} />
						<ChatInput onSend={handleUserMessage} />
						<footer>&copy; Horizon 2024</footer>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Home;
