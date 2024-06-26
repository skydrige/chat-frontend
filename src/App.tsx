import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
// @ts-ignore
import Sidebar from './components/Sidebar';
// @ts-ignore
import ChatArea from './components/ChatArea';
// @ts-ignore
import ChatInput from './components/ChatInput';
import './assets/css/App.css';

function App() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleToggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    useEffect(() => {
        const sidebar = document.querySelector('.sidebar-column');
        const mainContent = document.querySelector('.main-content');
        if (sidebar && mainContent) {
            const sidebarWidth = sidebar.getBoundingClientRect().width;
            const mainContentWidth = mainContent.getBoundingClientRect().width;

            if (mainContentWidth < 2 * sidebarWidth) {
                // @ts-ignore
                sidebar.style.position = 'fixed';
                // @ts-ignore
                sidebar.style.zIndex = '1';
                // @ts-ignore
                mainContent.style.marginLeft = `${sidebarWidth}px`;
            } else {
                // @ts-ignore
                sidebar.style.position = 'relative';
                // @ts-ignore
                sidebar.style.zIndex = '0';
                // @ts-ignore
                mainContent.style.marginLeft = '0';
            }
        }
    }, [sidebarVisible]);

    return (
        <div>
            <NavbarComponent onToggleSidebar={handleToggleSidebar} />

            <Container fluid className="main-container">
                <Row className="main-row">
                    <Col xs={2} className={`sidebar-column p-4 ${sidebarVisible ? 'show' : 'hide'}`}>
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

export default App;
