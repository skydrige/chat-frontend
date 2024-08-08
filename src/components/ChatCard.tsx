import React from 'react';
import '../assets/css/App.css';

interface ChatCardProps {
	sender: 'user' | 'system';
	text: string;
}

const ChatCard: React.FC<ChatCardProps> = ({ sender, text }) => {
	return (
		<div className={`chat-card ${sender === 'user' ? 'user-message' : 'system-message'}`}>
			<pre className="message-text">{text}</pre>
		</div>
	);
};

export default ChatCard;