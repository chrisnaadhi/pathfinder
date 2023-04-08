<script>
	import 'uno.css';
	import '@unocss/reset/antfu.css';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Welcome from '$lib/components/home/Welcome.svelte';

	let name = 'PathfinderKit';
</script>

<svelte:head>
	<title>PathfinderKit</title>
</svelte:head>

<main>
	<Header />
	<section class="bg-gray-2 w-full">
		<Welcome {name} />
	</section>
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		--at-apply: ma text-center;
	}
</style>
