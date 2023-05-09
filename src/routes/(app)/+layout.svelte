<script>
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Welcome from '$lib/components/home/Welcome.svelte';

	let name = 'PathfinderKit';
</script>

<main>
	<Header />
	{#if $page.url.pathname === '/'}
		<section class="bg-fuchsia-50 w-full pt-10">
			<Welcome {name} />
		</section>
	{/if}

	<section class="mt-15 mb-5">
		<slot />
	</section>
</main>

<style>
	main {
		--at-apply: ma text-center;
	}
</style>
