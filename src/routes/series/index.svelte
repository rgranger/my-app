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
	import { series } from '../../store';
	import { outsideClick } from '$lib/actions/outside-click';
	import UpdateSerieForm from '$lib/components/series/UpdateSerieForm.svelte';

	onMount(async () => {
		fetch('/api/series')
			.then((res) => res.json())
			.then((data) => series.set(data))
			.catch((err) => console.error(err));
	});

	let selectedSerie = null;

	function handleUpdateClick() {
		console.log('name', selectedSerie.name);
		console.log('last', selectedSerie.last_episode_viewed);
	}
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
			<UpdateSerieForm
				name={selectedSerie.name}
				lastEpisodeViewed={selectedSerie.last_episode_viewed}
				img={selectedSerie.img}
				{handleUpdateClick}
			/>
		{:else}
			<h1>Add new serie</h1>
		{/if}
	</section>
</div>
