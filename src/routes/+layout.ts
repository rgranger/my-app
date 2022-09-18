/** @type {import('./$types').LayoutLoad} */
export async function load(/*{ session }*/) {
	return {
		props: {
			user: null // session.user
		}
	};
}
