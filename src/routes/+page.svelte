<script context="module" lang="ts">
	import CV from '$lib/components/CV.svelte'

	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- voir pour idée https://templateflip.com/demo/templates/right-resume/ -->

<CV />
