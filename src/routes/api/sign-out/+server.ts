import { serialize } from 'cookie';

/** @type {import('@./$types').RequestHandler} */
export function GET() {
	return new Response(
		JSON.stringify({ message: 'Logged out' }),
		{
			status: 301,
			headers: {
				'Set-Cookie': serialize('user', '', {
					path: '/',
					expires: new Date(0)
				}),
				location: '/sign-in'
			}
		}
	)
}
