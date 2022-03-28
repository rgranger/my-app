import { createSession, user } from './_db';
import { serialize } from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    const { username, password } = await request.json()

    if (username !== user.username || password !== user.password) {
        return {
            status: 401,
            body: {
                message: 'Invalid credentials'
            }
        }
    } else {
        const { id } = await createSession(username);

        return {
            status: 200,
            body: {
                message: 'Logged in'
            },
            headers: {
                'Set-Cookie': serialize('session_id', id, {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60 * 24 * 7, // one week
                }),
            },
        }
    }
}
