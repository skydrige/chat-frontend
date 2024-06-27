import React from 'react';
import { BsSend } from "react-icons/bs";
import { Button, Form, InputGroup } from "react-bootstrap";

const ChatInput: React.FC = () => {
	return (
		<div className="chat-input-section p-2 m-2">
			<InputGroup className={"chat-input-field"}>
				<Form.Control
					as="textarea"
					placeholder="Type to Chat..."
					aria-label="message"
					className={"chat-input"}
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
