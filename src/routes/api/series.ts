import { series } from './_db';
import { parse } from 'cookie';

export async function get({ headers: { cookie } }) {
    const cookies = parse(cookie || '');

    if (!cookies.session_id) {
        return {
            status: 401,
        }
    }

    return {
     status: 200,
     body: series
    };
}
