import { v4 as uuidv4 } from '@lukeed/uuid';
import { db } from '$lib/db'
import bcrypt from 'bcrypt'

let sessions = [];

export const createSession = (username) => {
    const session = {
     id: uuidv4(),
     username,
    };
    sessions.push(session);
    return Promise.resolve(session);
};

export const getSession = (id) => {
    const session = sessions.find((session) => session.id === id);
    if (!session) return Promise.resolve(null);
    return Promise.resolve(session);
};

export const removeSession = (id) => {
    const session = sessions.find((session) => session.id === id);
    if (!session) return Promise.reject(new Error('Session not found'));
    sessions = sessions.filter((session) => session.id !== id);
    return Promise.resolve(session);
};

export const checkCredentials = async (username, password) => {
    try {
        const stmt = db.prepare(`SELECT password FROM users WHERE username = ?;`)
        const result = stmt.get(username)

        if (await bcrypt.compare(password, result.password)) {
            return true
        } else {
            return false
        }
    } catch(e) {
        return false
    }
}
