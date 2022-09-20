import { checkCredentials } from '$lib/server/auth';
import { serialize } from 'cookie';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { username, password } = await request.json();

	const areCredentialsValid = await checkCredentials(username, password);

	if (!areCredentialsValid) {
		throw error(401, 'Invalid credentials')
	} else {
		return new Response(
			JSON.stringify({ message: 'Logged in' }),
			{ 
				status: 200,
				headers: {
					'Set-Cookie': serialize('user', username, {
						path: '/',
						httpOnly: true,
						sameSite: 'strict',
						secure: process.env.NODE_ENV === 'production',
						maxAge: 60 * 60 * 24 * 7 // one week
					})
				}
			 }
		)
	}
}
