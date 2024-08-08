import React, { useState, useRef, useEffect } from 'react';
import { BsSend } from 'react-icons/bs';
import { Button, Col, Row } from 'react-bootstrap';
import '../assets/css/App.css';
import { LuFileSymlink } from "react-icons/lu";

const ChatInput: React.FC = () => {
	const [text, setText] = useState('');
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
	const chatInputRef = useRef<HTMLDivElement | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
		adjustTextAreaHeight();
	};

	const handleInput = () => {
		if (text.trim()) {
			console.log('Input submitted:', text);
			setText('');
			adjustTextAreaHeight();
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleInput();
		}
	};

	const adjustTextAreaHeight = () => {
		if (textAreaRef.current && chatInputRef.current) {
			textAreaRef.current.style.height = '40px';
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
			chatInputRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
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
			}, 250);
		};

		textArea?.addEventListener('focus', handleFocus);
		textArea?.addEventListener('blur', handleBlur);

		return () => {
			textArea?.removeEventListener('focus', handleFocus);
			textArea?.removeEventListener('blur', handleBlur);
		};
	}, []);

	useEffect(() => {
		adjustTextAreaHeight();
	}, [text]);

	return (
		<div className="chat-input-section">
			<Row className="chat-input-field">
				<Col xs={1} className="file-link">
					<Button size="lg">
						<LuFileSymlink/>
					</Button>
				</Col>
				<Col xs={8} className="chat-input" ref={chatInputRef}>
					<textarea ref={textAreaRef} value={text} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Type to Chat..." maxLength={1000000}/>
				</Col>
				<Col xs={1} className="chat-button">
					<Button size="lg" onClick={handleInput}>
						<BsSend />
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default ChatInput;