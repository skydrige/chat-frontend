import React from 'react';
import '../assets/css/App.css';

interface ChatCardProps {
	sender: 'user' | 'system';
	text: string;
	hasWrapsOrIndents: boolean;
}

const ChatCard: React.FC<ChatCardProps> = ({ sender, text, hasWrapsOrIndents }) => {
	return (
		<div className={`chat-card ${sender === 'user' ? 'user-message' : 'system-message'} ${hasWrapsOrIndents ? 'text-left' : 'text-center'}`}>
			<pre className="message-text">{text}</pre>
		</div>
	);
};

export default ChatCard;