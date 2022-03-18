<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let img = '';
	let name = '';
	let lastEpisodeViewed = '';
</script>

<h1>Add new serie</h1>
{#if img}
	<img class="aspect-video w-1/3 pt-2" src={img} alt={name} />
{/if}
<Input id="name" class="pt-2" name="name" label="Name" type="text" bind:value={name} />
<Input
	class="pt-2"
	id="last_episode_viewed"
	name="last_episode_viewed"
	label="Last Episode Viewed"
	type="text"
	bind:value={lastEpisodeViewed}
/>
<Input class="pt-2" id="img" name="img" label="Image URL" type="text" bind:value={img} />

<div class="pt-2">
	<Button on:click={() => dispatch('create', { name, lastEpisodeViewed, img })}>Create</Button>
</div>
