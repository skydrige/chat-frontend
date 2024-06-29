// ChatInput.tsx
import React from 'react';
import { BsSend } from 'react-icons/bs';
import { Button, Col, Row } from 'react-bootstrap';
import '../assets/css/App.css'; // Import your CSS file
import { LuFileSymlink } from "react-icons/lu";

const ChatInput: React.FC = () => {
	return (
		<div className="chat-input-section">
			<Row className="chat-input-field">
				<Col xs={1} className={"file-link"}>
					<Button size={"lg"}>
						<LuFileSymlink/>
					</Button>
				</Col>
				<Col xs={8} className="chat-input">
					<textarea placeholder="Type to Chat..." />
				</Col>
				<Col xs={1} className="chat-button">
					<Button size="lg">
						<BsSend />
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default ChatInput;
