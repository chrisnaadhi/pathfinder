<script>
	let placeholder = 'Konten ada disini nanti!';

	export let data;
</script>

<section>
	<p>{placeholder}</p>
	{#each data.results as res}
		<pre>{res.title}</pre>
	{/each}
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
