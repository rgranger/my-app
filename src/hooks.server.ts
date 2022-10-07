import 'dotenv/config';
import cookie from 'cookie'
import { getUser } from '$lib/server/auth';

export async function handle({ event, resolve })  {
    const url = new URL(event.request.url)

    if (url.pathname.startsWith('/admin')) {
        const cookies = cookie.parse(event.request.headers.get('cookie') || '')

        if (!await getUser(cookies.user)) {

            return Response.redirect(event.url.origin+'/sign-in')
        }
    }

    return resolve(event)
}
