import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';
import { getSession as getSessionFromApi } from './routes/api/_db';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');

	// TODO https://github.com/sveltejs/kit/issues/1046
	const method = request.url.searchParams.get('_method');
	if (method) {
		request.method = method.toUpperCase();
	}

	if (cookies.session_id) {
		const session = await getSessionFromApi(cookies.session_id);
		if (session) {
			request.locals.user = { username: session.username };
		} else {
			request.locals.user = null;
		}
	}

	return resolve(request);
};

export function getSession(request) {
    return request?.locals?.user
     ? {
             user: {
				username: request.locals.user.username,
             },
       }
     : {};
}
