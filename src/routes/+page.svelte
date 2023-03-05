<script context="module" lang="ts">
	import CV from '$lib/components/cv/CV.svelte'

	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<CV />
