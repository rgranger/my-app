import { v4 as uuidv4 } from '@lukeed/uuid';
import { db } from '$lib/db';
import bcrypt from 'bcrypt';

let sessions = [];

export const createSession = (username: string) => {
	const session = {
		id: uuidv4(),
		username
	};
	sessions.push(session);
	return Promise.resolve(session);
};

export const getSession = (id: string) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.resolve(null);
	return Promise.resolve(session);
};

export const removeSession = (id: string) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.reject(new Error('Session not found'));
	sessions = sessions.filter((session) => session.id !== id);
	return Promise.resolve(session);
};

export const checkCredentials = async (username: string, password: string) => {
	try {
		const stmt = db.prepare(`SELECT password FROM users WHERE username = ?;`);
		const result = stmt.get(username);

		if (await bcrypt.compare(password, result.password)) {
			return true;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
};

export const updateCredentials = async ({
	username,
	currentPassword,
	newPassword
}: {
	username: string;
	currentPassword: string;
	newPassword: string;
}) => {
	try {
		const currentUser = db.prepare(`select * from users;`).get();

		if (await bcrypt.compare(currentPassword, currentUser.password)) {
			const stmt = db.prepare(`
            UPDATE users
            SET username = ?,
                password = ?
            WHERE id = ${currentUser.id};`);

			stmt.run(username, await bcrypt.hash(newPassword, 10));

			return true;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
};
