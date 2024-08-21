import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from "js-cookie";
import { HandleLogout } from './Handle';

interface AuthContextType {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		const authCookie = Cookies.get('auth');
		return authCookie !== undefined;
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const authCookie = Cookies.get('auth');
			setIsAuthenticated(authCookie !== undefined);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const login = () => {
		const randomBytes = new Uint8Array(32);
		window.crypto.getRandomValues(randomBytes);
		const randomString = Array.from(randomBytes, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');

		setIsAuthenticated(true);
		Cookies.set('auth', randomString, { expires: 7 });
	};

	const logout = () => {
		setIsAuthenticated(false);
		Cookies.remove('auth');
		HandleLogout();
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};