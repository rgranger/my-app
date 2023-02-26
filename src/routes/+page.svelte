<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- voir pour idée https://templateflip.com/demo/templates/right-resume/ -->

<div>
	<section>
		<h1>Robin Granger</h1>
		<p>Senior Software Engineer</p>
		<button>Download CV</button>
		<button>Hire Me</button>
	</section>
	<section>
		<div>
			<h1>About Me</h1>
			<p>bla bla bla</p>
		</div>
		<div>
			<ul>
				<li>Age 31</li>
				<li>Email robin.granger.pro@gmail.com</li>
			</ul>
		</div>
	</section>
	<section>
		<h1>Professional Skills</h1>
		Node React Redux TypeScript Rust Go Sveltekit
	</section>
	<section>
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
	<section>
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
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
