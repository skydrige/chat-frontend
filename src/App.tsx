import { useState } from 'react';
import { Container, Navbar, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import reactsvg from './assets/react.svg';

function App() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <Navbar className={"navbar"} expand="lg">
                <Button onClick={() => setSidebarVisible(!sidebarVisible)} className="ms-3">
                    <img src={reactsvg} alt="Toggle Sidebar" className="toggle-icon" />
                </Button>
                <Navbar.Brand href="#" className="navbar-brand ms-3">Chat App</Navbar.Brand>
            </Navbar>

            {/* Main Container */}
            <Container fluid className="main-container">
                <Row className="main-row">
                    {/* Sidebar */}
                    <Col xs={2} className={`sidebar-column ${sidebarVisible ? 'show' : 'hide'} p-4`}>
                        <div className="sidebar">
                            <h5>Sidebar</h5>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                            <p>Sidebar content goes here.</p>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col xs={sidebarVisible ? 10 : 12} className="main-content p-2 m-2">
                        <Row className={"chat-section p-2 m-2"}>
                            <Col>
                                <center>Chat Area</center>
                            </Col>
                        </Row>
                        <Row className={"chat-input-section p-2 -m-2"}>
                            <Col>
                                <center>Chat Input</center>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;