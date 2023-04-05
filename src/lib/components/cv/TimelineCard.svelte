<script>
    export let title
    export let company
    export let from
    export let to
</script>

<div class="border-[1px] border-slate-200 border-l-2 border-l-sky-600 p-8 rounded flex flex-col gap-2 relative shadow-md">
    <div class="bg-white border-2 border-sky-600 absolute rounded-full w-3 h-3 top-[20px] left-[-41px]"></div>
    <div class="border-[1px] border-sky-600 absolute w-[29px] top-[25px] left-[-29px]"></div>
    <h2>
        <span class="font-bold text-xl">{title}</span>
        <span class="font-bold text-slate-500">at {company}</span>
    </h2>
    <p class="text-sm">{from} - {to}</p>
    <p><slot></slot></p>
</div>
