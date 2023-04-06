<script>
	import ProgressBar from "../ProgressBar.svelte";
	import Timeline from "./Timeline.svelte";
	import TimelineCard from "./TimelineCard.svelte";
</script>

<!-- voir pour idée https://templateflip.com/demo/templates/right-resume/ -->

<div class="relative mx-32 my-16 shadow-lg rounded-xl">
	<img
		class="absolute left-8 top-14 border-8 grayscale"
		src="/photo.jfif"
		alt="Robin Granger"
		width="200"
		height="200"
	/>
	<section class="rounded-t-xl bg-sky-600">
		<div class="ml-72 w-fit pb-8 pt-14">
			<div class="text-white font-bold text-4xl mb-4">Robin Granger</div>
			<p class="text-white mb-4 ">Lead Software Engineer</p>
			<a class="text-slate-700" download href="/RobinGrangerResume.pdf">
				<button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-full">
					Download CV
				</button>
			</a>
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
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-5/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">TypeScript</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-4/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Rust</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-1/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Go</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-1/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">C#</div>
                    <ProgressBar colorClass="bg-sky-600" widthClass="w-2/6" ></ProgressBar>
				</div>
			</div>
			<div class="flex flex-1 flex-col gap-6">
				<div>
					<div class="pb-2">Node</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-5/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Deno</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-1/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">React</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-5/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Redux</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-5/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">Sveltekit</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-2/6" ></ProgressBar>
				</div>
				<div>
					<div class="pb-2">PostgreSQL</div>
                    <ProgressBar colorClass="bg-teal-500" widthClass="w-1/6" ></ProgressBar>
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
			>
				<ul>
					<li>Conception, développement & maintenance de la WebRCS (application Web embarquée hautement interactive permettant le pilotage à distance des produits Analog Way)</li>
					<li>Mise en place des bonnes pratiques (Quality of Code, Review, TU, CI)</li>
					<li>Création des stories Backend & DevOps</li>
					<li>Mentoring des juniors</li>
				</ul>
			</TimelineCard>
			<TimelineCard
				title='Software Engineer'
				company='Analog Way'
				from='Octobre 2015'
				to='Octobre 2018'
			>
			<ul>
				<li>Conception, développement & maintenance de la WebRCS (application Web embarquée hautement interactive permettant le pilotage à distance des produits Analog Way)</li>
			</ul>
			</TimelineCard>
			<TimelineCard
				title="Stage de fin d'étude"
				company='Analog Way'
				from='Février 2015'
				to='Octobre 2018'
			>
				<ul>
					<li>Etude de l'état de l'art des application web</li>
					<li>Etude de faisabilité de portage d'une application Flash hautement interactive vers une application HTML5</li>
					<li>Conception et développement d'un prototype répondant aux besoins et contraintes de performances (vidéo temps réel)</li>
				</ul>
			</TimelineCard>
		</Timeline>
	</section>
	<section class="bg-white p-8 rounded-b-xl">
		<h1>Education</h1>
		<Timeline>
			<TimelineCard
				title="Diplôme d'ingénieur"
				company='Télécom Saint-Etienne'
				from='2012'
				to='2015'
			/>
			<TimelineCard
				title='CPGE - MP'
				company='Lycée Albert Schweitzer'
				from='2009'
				to='2012'
			/>
			<TimelineCard
				title="Bac S"
				company='Lycée André Boulloche'
				from='2006'
				to='2009'
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
