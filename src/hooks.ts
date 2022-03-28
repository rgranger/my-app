import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';
import { getSession as getSessionFromApi } from './routes/api/_db';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	if (cookies.session_id) {
		const session = await getSessionFromApi(cookies.session_id);
		if (session) {
			event.locals.user = { username: session.username };
		} else {
			event.locals.user = null;
		}
	}

	return resolve(event);
};

export function getSession(event) {
    return event?.locals?.user
     ? {
             user: {
				username: event.locals.user.username,
             },
       }
     : {};
}
