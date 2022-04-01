<script>
	export let checked = false;
	export let id;
	export let label;
	export let name;
	export let required = false;
</script>

<div class={$$props.class}>
	<label for={id} class="block text-sm font-medium text-gray-700">
		{label}
	</label>
	<div class="mt-1">
		<input
			type="checkbox"
			{name}
			{id}
			{required}
			bind:checked
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
		/>
	</div>
</div>
