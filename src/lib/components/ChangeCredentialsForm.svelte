<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	import { createEventDispatcher } from 'svelte';

	let username = '';
	let currentPassword = '';
	let newPassword = '';

	const dispatch = createEventDispatcher();

	function submit() {
		dispatch('submit', { username, currentPassword, newPassword });
		username = '';
		currentPassword = '';
		newPassword = '';
	}
</script>

<form on:submit|preventDefault={submit} class="space-y-5 {$$props.class}">
	<Input
		label="Username"
		type="text"
		placeholder="Username"
		name="username"
		id="username"
		bind:value={username}
	/>
	<Input
		label="Current Password"
		type="password"
		placeholder="Password"
		name="current-password"
		id="current-password"
		bind:value={currentPassword}
	/>
	<Input
		label="New Password"
		type="password"
		placeholder="Password"
		name="new-password"
		id="new-password"
		bind:value={newPassword}
	/>
	<div class="text-center">
		<Button type="submit">Update</Button>
	</div>
</form>
