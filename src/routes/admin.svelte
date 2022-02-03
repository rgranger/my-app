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
	import { onMount } from 'svelte';
	import { series } from '../store';

	onMount(async () => {
		fetch('/api/series')
			.then((res) => res.json())
			.then((data) => series.set(data))
			.catch((err) => console.error(err));
	});

	export let user;
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>

<section class="flex">
	{#each $series as serie}
		<div>
			<img src={serie.img} alt={serie.name} />
			{serie.name}: {serie.last_episode_viewed}
		</div>
	{/each}
</section>
