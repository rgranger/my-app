/** @type {import('./$types').LayoutLoad} */
export async function load({ data }) {
	return {
		user: data.user
	};
}
