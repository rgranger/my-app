import { updateCredentials } from '$lib/server/auth';

export async function POST({ request }) {
	// TODO validate body
	const { username, currentPassword, newPassword } = await request.json();

	if (username.length < 4 || newPassword.length < 4) {
		return new Response(
            'Username and password must be at least 4 characters long',
            {
                status: 400
            }
        )
	}

    try {
        const result = await updateCredentials({
            username,
            currentPassword,
            newPassword
        })

        if (result === true) {
            return new Response(
                'Credentials updated',
                {
                    status: 200
                }
            )
        }  else {
            return new Response(
                'Invalid credentials',
                {
                    status: 400
                }                
            )
        }
    } catch(e) {
        return new Response(
            e.message,
            {
                status: 500,
            }
        )
	}
}
