<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';

	export let name;
	export let lastEpisodeViewed;
	export let img;
	export let finished;

	const dispatch = createEventDispatcher();
</script>

<h1>Update Serie</h1>
<img class="aspect-video pt-2" src={img} alt={name} />
<Input id="name" class="pt-2" name="name" label="Name" type="text" bind:value={name} />
<Input
	class="pt-2"
	id="last_episode_viewed"
	name="last_episode_viewed"
	label="Last Episode Viewed"
	type="text"
	bind:value={lastEpisodeViewed}
/>
<Input id="img" class="pt-2" name="img" label="Image URL" type="text" bind:value={img} />
<Checkbox id="finished" class="pt-2" name="finished" label="Finished ?" bind:checked={finished} />

<div class="pt-2">
	<Button on:click={() => dispatch('update', { name, lastEpisodeViewed, img, finished })}
		>Update</Button
	>
	<Button on:click={() => dispatch('delete')}>Delete</Button>
</div>
