<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	let placeholder = 'Konten ada disini nanti!';
	const back = backButton($page);

	export let data;
</script>

<section>
	<p>{placeholder}</p>
	{#each data.results as res}
		<pre>{res.title}</pre>
		<div>
			{@html res.contents}
		</div>
	{/each}
	<a href={back}>Kembali</a>
</section>

<style>
	p {
		--at-apply: italic;
	}

	a {
		--at-apply: btn dfBg;
	}
</style>
