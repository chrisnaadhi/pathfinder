<script>
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { trigger, overlay, content, close, portalled },
		states: { open }
	} = createDialog();
</script>

<div use:melt={$portalled}>
	{#if $open}
		<div use:melt={$overlay} class="main-bg" />
		<div
			class="fixed left-[50%] top-[50%] z-4 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-5 shadow-lg"
			transition:fade={{ delay: 150, duration: 300 }}
			use:melt={$content}
		>
			<div class="absolute right-0 mt--8 mr--3">
				<button class="bg-dark px-1 rounded-full text-white" use:melt={$close}>&cross;</button>
			</div>

			<slot />
		</div>
	{/if}
</div>

<button
	use:melt={$trigger}
	class="btn dfBgSecond dfTx w-full flex gap-1 items-center justify-center border border-violet"
>
	<div class="i-mdi-pencil-box w-4 h-4" />
	Edit</button
>

<style>
	.main-bg {
		--at-apply: fixed inset-0 z-3 bg-black/60;
	}
</style>
