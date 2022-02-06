import { parse } from 'cookie';

export function makeAuthAPI(apiCallback: Function): Function {
    return async function authAPI(ctx) {
        const cookies = parse(ctx.headers.cookie || '');

        if (!cookies.session_id) {
            return {
                status: 401,
            }
        }

        return apiCallback(ctx);
    }
}
