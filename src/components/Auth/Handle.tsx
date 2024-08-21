export async function HandleLogin(username: string, password: string): Promise<boolean> {
	if (username === 'admin' && password === 'admin') {
		console.log('Login successful');
		return true;
	}
	console.log('Login failed');
	return false;
}

export async function HandleRegister(username: string, password: string): Promise<boolean> {
	try {
		console.log(username, password);
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
}

export const HandleLogout = (): boolean => {
	console.log('Logout successful');
	return true;
}