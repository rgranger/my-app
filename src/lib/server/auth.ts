import { db } from '$lib/server/db';
import bcrypt from 'bcryptjs';

export const getUser = async (username: string) => {
	try {
		return (await db.query('SELECT username FROM users WHERE username = $1;', [username])).rows[0];
	} catch (e) {
		return null
	}
}

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
