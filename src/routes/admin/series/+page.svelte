<script>
	import { onMount } from 'svelte';
	import { series } from '$lib/store';
	import { outsideClick } from '$lib/actions/outside-click';
	import UpdateSerieForm from '$lib/components/series/UpdateSerieForm.svelte';
	import CreateSerieForm from '$lib/components/series/CreateSerieForm.svelte';

	onMount(async () => {
		fetch('/api/admin/series')
			.then((res) => res.json())
			.then((data) => series.set(data))
			.catch((err) => console.error(err));
	});

	let selectedSerie = null;

	function handleUpdateSerie({ detail: { name, lastEpisodeViewed, img, finished } }) {
		fetch(`/api/admin/series/${selectedSerie.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				last_episode_viewed: lastEpisodeViewed,
				img,
				finished
			})
		})
			.then((res) => res.json())
			.then((updatedSerie) => {
				series.update((series) => {
					const index = series.findIndex((serie) => serie.id === selectedSerie.id);

					if (index !== -1) {
						series[index] = updatedSerie;
					}

					return series;
				});
			})
			.catch((err) => console.error(err));
	}

	function handleCreateSerie({ detail: { name, lastEpisodeViewed, img } }) {
		fetch('/api/admin/series', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				last_episode_viewed: lastEpisodeViewed,
				img
			})
		})
			.then((res) => res.json())
			.then((createdSerie) => {
				series.update((series) => [...series, createdSerie]);
			})
			.catch((err) => console.error(err));
	}

	function handleDeleteSerie() {
		fetch(`/api/admin/series/${selectedSerie.id}`, {
			method: 'DELETE'
		})
			.then((res) => res.json())
			.then((newSeries) => {
				selectedSerie = null;
				series.set(newSeries);
			})
			.catch((err) => console.error(err));
	}
</script>

<svelte:head>
	<title>Series</title>
</svelte:head>

<div
	class="min-h-0 flex flex-row flex-1"
	use:outsideClick
	on:outside-click={() => (selectedSerie = null)}
>
	<section class="flex flex-1 flex-wrap justify-center overflow-auto p-1">
		{#each $series as serie}
			<div
				on:click={() => (selectedSerie = serie)}
				class="p-4 text-center border-2"
				class:border-blue-500={selectedSerie === serie}
				class:border-transparent={selectedSerie !== serie}
				class:bg-gray-400={serie.finished}
			>
				<img class="w-64 aspect-video" src={serie.img} alt={serie.name} />
				<span>{serie.name}</span>
				-
				<span>{serie.last_episode_viewed}</span>
			</div>
		{/each}
	</section>
	<section class="flex flex-initial w-96 flex-col flex-none items-center justify-center p-8">
		{#if selectedSerie}
			<UpdateSerieForm
				name={selectedSerie.name}
				lastEpisodeViewed={selectedSerie.last_episode_viewed}
				img={selectedSerie.img}
				finished={selectedSerie.finished}
				on:update={handleUpdateSerie}
				on:delete={handleDeleteSerie}
			/>
		{:else}
			<CreateSerieForm on:create={handleCreateSerie} />
		{/if}
	</section>
</div>
