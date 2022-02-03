<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import SignInForm from '$lib/components/SignInForm.svelte';

	let error;

	async function handleSubmit({ detail: { username, password } }) {
		const response = await fetch('/api/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		if (!response.ok) {
			error = (await response.json()).message;
			return;
		}

		window.location.href = '/admin';
	}
</script>

<svelte:head>
	<title>Sign In</title>
</svelte:head>

<section>
	<h1 class="text-2xl font-semibold text-center">Sign In</h1>

	<SignInForm class="max-w-xl mx-auto mt-8" on:submit={handleSubmit} />
	<p class:invisible={!error} class="mt-3 text-red-500 text-center font-semibold">
		{error}
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
