// ChatInput.tsx
import React from 'react';
import { BsSend } from 'react-icons/bs';
import { Button, Col, Row } from 'react-bootstrap';
import '../assets/css/App.css'; // Import your CSS file

const ChatInput: React.FC = () => {
	return (
		<div className="chat-input-section">
			<Row className="chat-input-field">
				<Col xs={8} className="chat-input">
					<textarea placeholder="Type to Chat..." />
				</Col>
				<Col xs={1} className="chat-button">
					<Button size="sm">
						<BsSend />
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default ChatInput;
