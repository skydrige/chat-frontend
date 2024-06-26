import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import './components/analytics';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
