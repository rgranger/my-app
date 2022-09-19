import { v4 as uuidv4 } from '@lukeed/uuid';
import { db } from '$lib/server/db';
import bcrypt from 'bcryptjs';

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
		const result = (await db.query(`SELECT password FROM users WHERE username = $1;`, [username]))
			.rows[0];

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
		const currentUser = (await db.query(`select * from users;`)).rows[0];

		if (await bcrypt.compare(currentPassword, currentUser.password)) {
			const updateQuery = {
				text: `
				UPDATE users
				SET username = $1,
					password = $2
				WHERE id = ${currentUser.id};`,
				values: [username, await bcrypt.hash(newPassword, 10)]
			};

			await db.query(updateQuery);

			return true;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
};
