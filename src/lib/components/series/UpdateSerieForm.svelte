<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let name;
	export let lastEpisodeViewed;
	export let img;

	const dispatch = createEventDispatcher();
</script>

<img class="aspect-video w-1/3 pt-2" src={img} alt={name} />
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

<div class="pt-2">
	<Button on:click={() => dispatch('update', { name, lastEpisodeViewed, img })}>Update</Button>
	<Button on:click={() => dispatch('delete')}>Delete</Button>
</div>
