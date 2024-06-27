import React from 'react';
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
				<InputGroup.Text className={"chat-input-group"}>
					<Button className={"chat-button"}>
						<BsSend />
					</Button>
				</InputGroup.Text>
			</InputGroup>
		</div>
	);
};

export default ChatInput;