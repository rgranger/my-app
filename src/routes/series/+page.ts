import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutLoad} */
export async function load({ parent }) {
	const { user } = await parent()

	console.log('user', user)

	if (!user) {
		console.log('redirect')
		return redirect(302, '/sign-in')
	}
}
