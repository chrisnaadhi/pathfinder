<script>
	import { enhance } from '$app/forms';

	let heading = 'PathfinderKit!';
	export let data;
</script>

<main>
	<h1>{heading}</h1>
	<p>if you're on this page then you want to seed database, click the button below to seed it</p>
	<p>Status: {data.status}</p>
	<form method="post" use:enhance>
		<button type="submit" class="btn bg-violet text-white">Seed DB</button>
	</form>
</main>

<style>
	main {
		--at-apply: flex flex-col items-center justify-center;
	}

	p {
		--at-apply: italic;
	}
</style>
