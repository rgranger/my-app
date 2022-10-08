import { serialize } from 'cookie';

/** @type {import('@./$types').RequestHandler} */
export function DELETE() {
	return new Response(
		JSON.stringify({ message: 'Logged out' }),
		{
			status: 301,
			headers: {
				'Set-Cookie': serialize('user', '', {
					path: '/',
					httpOnly: true,
					sameSite: 'strict',
					secure: process.env.NODE_ENV === 'production',
					expires: new Date(0)
				}),
				location: '/sign-in'
			}
		}
	)
}
