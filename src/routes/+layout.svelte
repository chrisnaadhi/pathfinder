<script>
	import 'uno.css';
	import '../reset.css';
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';

	let name = 'PathfinderKit';
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<main class="min-h-screen">
	<slot />
	<Footer />
</main>
