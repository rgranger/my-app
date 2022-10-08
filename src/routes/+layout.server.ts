import { getUser  } from "$lib/server/auth";
import cookie from 'cookie'

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request, setHeaders }) {
    const cookies = cookie.parse(request.headers.get('cookie') || '')

    return {
        user: await getUser(cookies.user)
    };
}
