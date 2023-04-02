<script>
	import 'uno.css';
	import '@unocss/reset/antfu.css';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>PathfinderKit</title>
</svelte:head>

<main>
	<Header />
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		--at-apply: container ma text-center;
	}
</style>
