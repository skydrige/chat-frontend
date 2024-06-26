// components/ChatInput.tsx
import React from 'react';
import '../assets/css/App.css';
import { BsSend } from "react-icons/bs";
import {Button, Form, InputGroup} from "react-bootstrap";

const ChatInput: React.FC = () => {
	return (
		<div className="chat-input-section p-2 m-2">
			<InputGroup className={"chat-input"}>
				<Form.Control
					placeholder="Type a message..."
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					className={"chat-input-field"}
				/>
				<InputGroup.Text className={"p-0 me-2"} style={{ backgroundColor: "inherit" }}>
					<Button className={"chat-button p-0 me-2 ms-2"} style={{ backgroundColor: "inherit", border: "none" }}>
						<BsSend />
					</Button>
				</InputGroup.Text>
			</InputGroup>
		</div>
	);
};

export default ChatInput;
