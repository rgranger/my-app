<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';

	export let user;
</script>

<Header isLoggedIn={!!user} />
<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1920px;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 0;
	}
</style>
