<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- voir pour idée https://templateflip.com/demo/templates/right-resume/ -->

<div class="relative mx-32 my-16 shadow-lg rounded-xl">
	<img
		class="absolute left-8 top-14 border-8 grayscale"
		src="https://demo.templateflip.com/right-resume/images/avatar.jpg"
		alt="Robin Granger"
		width="200"
		height="200"
	/>
	<section class="rounded-t-xl bg-sky-600">
		<div class="ml-72 w-fit pb-8 pt-14">
			<div class="text-white font-bold text-4xl mb-4">Robin Granger</div>
			<p class="text-white mb-4 ">Senior Software Engineer</p>
			<button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-full">Download CV</button>
			<button class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full ml-1"
				>Hire Me</button
			>
		</div>
	</section>
	<section class="bg-white p-8 pt-12 border-b-2 border-slate-100 flex flex-row gap-8">
		<div class="flex-1">
			<h1>About Me</h1>
			<p class="">
				Bonjour ! Je m'appelle Robin Granger et je suis un passioné de développement logiciel.
				J'affectionne particulièrement l'IA et les dernières technologies, telles que Deno,
				Sveltekit et Rust.
			</p>
		</div>
		<div class="grid gap-6 grid-rows-3 grid-flow-col p-2 h-28 w-80">
			<div>Age</div>
			<div>Email</div>
			<div>Adresse</div>
			<div>31</div>
			<div>robin.granger.pro@gmail.com</div>
			<div>Antony</div>
		</div>
	</section>
	<section class="bg-white p-8 border-b-2 border-slate-100">
		<h1>Professional Skills</h1>
		Node React Redux TypeScript Rust Go Sveltekit
	</section>
	<section class="bg-white p-8 border-b-2 border-slate-100">
		<h1>Work Experience</h1>
		<div>
			<h2>Lead Software Engineer at Analog Way</h2>
			<p>Octobre 2018 - Maintenant</p>
			<p>bla bla</p>
		</div>
		<div>
			<h2>Software Engineer at Analog Way</h2>
			<p>Octobre 2015 - Octobre 2018</p>
			<p>bla bla</p>
		</div>
		<div>
			<h2>Stage de fin d'étude at Analog Way</h2>
			<p>Février 2015 - Août 2015</p>
			<p>bla bla</p>
		</div>
	</section>
	<section class="bg-white p-8 rounded-b-xl">
		<h1>Education</h1>
		<div>
			<h2>Diplome d'ingénieur at Télécom Saint-Etienne</h2>
			<p>x - x</p>
			<p>bla bla</p>
		</div>
		<div>
			<h2>x</h2>
			<p>x - x</p>
			<p>bla bla</p>
		</div>
		<div>
			<h2>x</h2>
			<p>x - x</p>
			<p>bla bla</p>
		</div>
	</section>
</div>

<style>
	h1 {
		font-size: xx-large;
		font-weight: bold;
		text-align: left;
		margin-bottom: 1rem;
	}
</style>
