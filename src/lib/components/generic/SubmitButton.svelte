<script>
	import { onDestroy } from 'svelte';

	export let btnValue = 'Submit';
	export let btnColor = 'dfBg';
	let btnClicked = false;

	const clicked = () => {
		btnClicked = true;
	};

	onDestroy(() => {
		btnClicked = false;
	});
</script>

<button type="submit" on:click={clicked} class={btnColor}>
	{#if btnClicked}
		<div class="loader" />
	{:else}
		{btnValue}
	{/if}
</button>

<style>
	button {
		--at-apply: btn w-full py-2 flex items-center justify-center;
	}

	.loader {
		--at-apply: border border-5 border-violet-1 rounded-50% border-t-violet-5 w-6 h-6;
		animation: spin 2s linear infinite;
	}

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
