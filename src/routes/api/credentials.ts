import { makeAuthAPI } from './_auth';
import { updateCredentials } from './_db';

export const post = makeAuthAPI(async ({ request }) => {
	// TODO validate body
	const { username, currentPassword, newPassword } = await request.json();

	if (username.length < 4 || newPassword.length < 4) {
		return {
			status: 400,
			body: 'Username and password must be at least 4 characters long'
		};
	}

	return updateCredentials({
		username,
		currentPassword,
		newPassword
	})
		.then((result) =>
			result === true
				? {
						status: 200,
						body: 'Credentials updated'
				  }
				: {
						status: 400,
						body: 'Invalid credentials'
				  }
		)
		.catch((e) => ({
			status: 500,
			body: e.message
		}));
});
