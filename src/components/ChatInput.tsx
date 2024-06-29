import React, { useState, useRef, useEffect } from 'react';
import { BsSend } from 'react-icons/bs';
import { Button, Col, Row } from 'react-bootstrap';
import '../assets/css/App.css'; // Import your CSS file
import { LuFileSymlink } from "react-icons/lu";

const ChatInput: React.FC = () => {
	const [text, setText] = useState('');
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
	const chatInputRef = useRef<HTMLDivElement | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
		adjustTextAreaHeight();
	};

	const adjustTextAreaHeight = () => {
		if (textAreaRef.current && chatInputRef.current) {
			textAreaRef.current.style.height = '40px'; // Reset height to auto
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set to scrollHeight
			chatInputRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Adjust parent height accordingly
			if (textAreaRef.current.scrollHeight > 100) {
				textAreaRef.current.style.overflowY = 'scroll';
			}
		}
	};

	useEffect(() => {
		const textArea = textAreaRef.current;
		const footer = document.querySelector('.main-content footer');

		const handleFocus = () => {
			if (window.innerWidth < 768) {
				footer?.classList.add('hide-footer');
			}
		};

		const handleBlur = () => {
			setTimeout(() => {
				footer?.classList.remove('hide-footer');
			}, 500); // Delay of 500 milliseconds, which is half a second
		};

		textArea?.addEventListener('focus', handleFocus);
		textArea?.addEventListener('blur', handleBlur);

		return () => {
			textArea?.removeEventListener('focus', handleFocus);
			textArea?.removeEventListener('blur', handleBlur);
		};
	}, []);

	useEffect(() => {
		adjustTextAreaHeight(); // Adjust height initially
	}, [text]);

	return (
		<div className="chat-input-section">
			<Row className="chat-input-field">
				<Col xs={1} className="file-link">
					<Button size="lg">
						<LuFileSymlink />
					</Button>
				</Col>
				<Col xs={8} className="chat-input" ref={chatInputRef}>
                    <textarea ref={textAreaRef} value={text} onChange={handleChange} placeholder="Type to Chat..." maxLength={500}/>
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
