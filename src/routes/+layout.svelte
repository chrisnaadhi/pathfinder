<script>
	import { page } from '$app/stores';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Welcome from '$lib/components/home/Welcome.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let name = 'PathfinderKit';
</script>

<svelte:head>
	<title>PathfinderKit</title>
</svelte:head>

<main>
	<Header />
	{#if $page.url.pathname === '/'}
		<section class="bg-fuchsia-50 w-full pt-12">
			<Welcome {name} />
		</section>
	{/if}

	<section class="mt-15">
		<slot />
	</section>
	<section>
		<Footer />
	</section>
</main>

<style>
	main {
		--at-apply: ma text-center;
	}
</style>
