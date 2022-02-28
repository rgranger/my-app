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
	import Input from '$lib/components/Input.svelte';
	import { onMount } from 'svelte';
	import { series } from '../../store';
	import { outsideClick } from '$lib/actions/outside-click';
	import Button from '$lib/components/Button.svelte';

	onMount(async () => {
		fetch('/api/series')
			.then((res) => res.json())
			.then((data) => series.set(data))
			.catch((err) => console.error(err));
	});

	let selectedSerie = null;

	function handleUpdateClick() {}
</script>

<svelte:head>
	<title>Series</title>
</svelte:head>

<div
	class="min-h-0 flex flex-col flex-1"
	use:outsideClick
	on:outside-click={() => (selectedSerie = null)}
>
	<section class="flex flex-1 flex-wrap overflow-auto p-4">
		{#each $series as serie}
			<div
				on:click={() => (selectedSerie = serie)}
				class="p-1 text-center ring-blue-500"
				class:ring-2={selectedSerie === serie}
			>
				<img class="w-56 aspect-video" src={serie.img} alt={serie.name} />
				<span>{serie.name}</span>
				-
				<span>{serie.last_episode_viewed}</span>
			</div>
		{/each}
	</section>
	<section class="flex flex-1 flex-col p-4 items-center -mt-2">
		{#if selectedSerie}
			<Input id="name" class="pt-2" name="name" label="Name" type="text" value={'label'} />
			<Input
				class="pt-2"
				id="last_episode_viewed"
				name="last_episode_viewed"
				label="Last Episode Viewed"
				type="text"
				value={'last_episode_viewed'}
			/>
			<img class="aspect-video w-1/3 pt-2" src={selectedSerie.img} alt={selectedSerie.name} />
			<div class="pt-2">
				<Button on:click={handleUpdateClick}>Update</Button>
			</div>
		{:else}
			<h1>Add new serie</h1>
		{/if}
	</section>
</div>
