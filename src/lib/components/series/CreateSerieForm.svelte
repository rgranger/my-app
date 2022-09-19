<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let img = 'https://pc-getter.com/wp-content/themes/the-thor/img/img_no_768.gif';
	let name = '';
	let lastEpisodeViewed = '';
</script>

<h1>Add New Serie</h1>
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
<Input class="pt-2" id="img" name="img" label="Image URL" type="text" bind:value={img} />

<div class="pt-2">
	<Button on:click={() => dispatch('create', { name, lastEpisodeViewed, img })}>Create</Button>
</div>
