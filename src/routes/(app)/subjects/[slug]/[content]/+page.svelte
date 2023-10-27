<script>
	export let data;

	let placeholder = 'Collection';
	const { getContent } = data;
</script>

<section>
	<p>{placeholder}</p>
	<div>
		{@html getContent?.contents}
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
