<script>
    export let colorClass = 'bg-sky-600'
    export let widthClass = 'w-0'

    const progressClass = `h-full rounded ${colorClass} ${widthClass}`
</script>

<div class="h-4 bg-slate-200 rounded">
    <div class={progressClass}></div>
</div>
