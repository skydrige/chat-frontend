import { useState } from 'react';
import { Container, Navbar, Button, Row, Col, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactsvg from './assets/react.svg';

function App() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Button variant="primary" onClick={() => setSidebarVisible(!sidebarVisible)} className="ms-3">
                    <img src={reactsvg} alt="Toggle Sidebar" style={{ width: '24px', height: '24px' }} />
                </Button>
                <Navbar.Brand href="#" className="ms-3">Chat App</Navbar.Brand>
            </Navbar>

            {/* Main Container */}
            <Container fluid style={{ height: 'calc(100vh - 56px)' }}> {/* Subtracting Navbar height */}
                <Row style={{ height: '100%', display: 'flex'}}>
                    {/* Sidebar */}
                    <Collapse in={sidebarVisible} dimension={"width"}>
                        <Col xs={2} className="sidebar-column p-2" style={{width: 'fit-content', minWidth: 'fit-content', border: 'none'}}>
                            <div className="sidebar" style={{ height: '100%', overflowY: 'auto', width: 'fit-content'}}>
                                <h5>Sidebar</h5>
                                <p>Sidebar content goes here.</p>
                                <p>Sidebar content goes here.</p>
                                <p>Sidebar content goes here.</p>
                                <p>Sidebar content goes here.</p>
                                <p>Sidebar content goes here.</p>
                            </div>
                        </Col>
                    </Collapse>

                    {/* Main Content */}
                    <Col xs={sidebarVisible ? 10 : 12} className="main-content" style={{ transition: 'margin-left 0.3s', flex: '1'}}>
                        <h2>Main Content</h2>
                        <p>This is the main content area.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;