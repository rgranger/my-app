<script>
	import ChangeCredentialsForm from '$lib/components/ChangeCredentialsForm.svelte';

	const notif = {
		message: '',
		class: 'text-red-500'
	};

	async function handleSubmit({ detail: { username, currentPassword, newPassword } }) {
		const response = await fetch('/api/admin/credentials', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, currentPassword, newPassword })
		});

		notif.message = await response.text();

		if (!response.ok) {
			notif.class = 'text-red-500';
		} else {
			notif.class = 'text-green-500';
		}
	}
</script>

<svelte:head>
	<title>User</title>
</svelte:head>

<section>
	<h1 class="text-2xl font-semibold text-center">Change Credentials</h1>

	<ChangeCredentialsForm class="max-w-xl mx-auto mt-8" on:submit={handleSubmit} />
	<p class:invisible={!notif.message} class={`mt-3 text-center font-semibold ${notif.class}`}>
		{notif.message}
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
