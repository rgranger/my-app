<script>
	import ProgressBar from "../ProgressBar.svelte";
	import Timeline from "./Timeline.svelte";
	import TimelineCard from "./TimelineCard.svelte";
</script>

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
		<div class="flex flex-row gap-6">
			<div class="flex flex-1 flex-col gap-6">
				<div>
					<div class="pb-2">JavaScript</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-full" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">TypeScript</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-5/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Rust</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-2/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Go</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-1/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">C#</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-3/6" ></ProgressBar>
				</div>
			</div>
			<div class="flex flex-1 flex-col gap-6">
				<div>
					<div class="pb-2">Node</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-full" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Deno</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-2/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">React</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-full" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Redux</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-5/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Sveltekit</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-3/6" ></ProgressBar>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-white p-8 border-b-2 border-slate-100">
		<h1>Work Experience</h1>
		<Timeline>
			<TimelineCard
				title='Lead Software Engineer'
				company='Analog Way'
				from='Octobre 2018'
				to='Maintenant'
				description='bla bla bla bla'
			/>
			<TimelineCard
				title='Software Engineer'
				company='Analog Way'
				from='Octobre 2015'
				to='Octobre 2018'
				description='bla bla bla bla'
			/>
			<TimelineCard
				title="Stage de fin d'étude"
				company='Analog Way'
				from='Février 2015'
				to='Octobre 2018'
				description='bla bla bla bla'
			/>
		</Timeline>
	</section>
	<section class="bg-white p-8 rounded-b-xl">
		<h1>Education</h1>
		<Timeline>
			<TimelineCard
				title="Diplôme d'ingénieur"
				company='Télécom Saint-Etienne'
				from='x'
				to='x'
				description='bla bla bla bla'
			/>
			<TimelineCard
				title='x'
				company='x'
				from='x'
				to='x'
				description='x'
			/>
			<TimelineCard
				title="x"
				company='x'
				from='x'
				to='x'
				description='bla bla bla bla'
			/>
		</Timeline>
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
