<script>
	import 'uno.css';
	import '@unocss/reset/antfu.css';

	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header />
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		--at-apply: container text-center;
	}
</style>
