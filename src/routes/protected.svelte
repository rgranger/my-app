<script context="module">
	export async function load({ session }) {
		if (!session?.user) {
			return {
				status: 302,
				redirect: '/sign-in'
			};
		} else {
			return {
				props: {
					user: session.user
				}
			};
		}
	}
</script>

<script>
	export let user;
</script>

<h1 class="text-2xl font-semibold text-center">
	Hi! You are registered with username {user.username}.
</h1>
