import React from 'react';
import '../assets/css/App.css';
import ChatCard from './ChatCard';

interface Message {
	sender: 'user' | 'system';
	text: string;
}

interface ChatAreaProps {
	messages: Message[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
	return (
		<div className="chat-area">
			<div className="chat-box">
				{messages.map((msg, index) => (
					<ChatCard key={index} sender={msg.sender} text={msg.text} />
				))}
			</div>
		</div>
	);
};

export default ChatArea;