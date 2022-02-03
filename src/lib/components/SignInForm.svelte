<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	import { createEventDispatcher } from 'svelte';

	let username = '';
	let password = '';

	const dispatch = createEventDispatcher();

	function submit() {
		dispatch('submit', { username, password });
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
		label="Password"
		type="password"
		placeholder="Password"
		name="password"
		id="password"
		bind:value={password}
	/>
	<div class="text-center">
		<Button type="submit">Login</Button>
	</div>
</form>
