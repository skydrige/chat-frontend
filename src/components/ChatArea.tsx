import React, { useEffect, useRef } from 'react';
import ChatCard from './ChatCard';
import '../assets/css/App.css';

interface ChatAreaProps {
	messages: { sender: 'user' | 'system'; text: string }[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
	const chatBoxRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (chatBoxRef.current) {
			chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div className="chat-area">
			<div className="chat-box" ref={chatBoxRef}>
				{messages.map((message, index) => (
					<ChatCard key={index} sender={message.sender} text={message.text} />
				))}
			</div>
		</div>
	);
};

export default ChatArea;