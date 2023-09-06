<script>
	import { page } from '$app/stores';
	import { fade, fly, slide } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import Header from '$lib/components/Header.svelte';
	import Welcome from '$lib/components/home/Welcome.svelte';

	let name = 'PathfinderKit';
	export let data;
</script>

<main in:fade={{ delay: 100, duration: 500 }}>
	<Header />
	{#key data.url}
		<div in:fade={{ delay: 500, duration: 500 }} out:fly={{ y: 50, duration: 400 }}>
			{#if $page.url.pathname === '/'}
				<section class="bg-violet-50 w-full pt-10">
					<Welcome {name} />
				</section>
			{/if}
			<section class="mt-20 mb-5 px-5 xl:px-0">
				<slot />
			</section>
		</div>
	{/key}
</main>

<style>
	main {
		--at-apply: ma text-center;
	}
</style>
