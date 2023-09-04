<script>
	import { page } from '$app/stores';

	let placeholder = 'Hello, svelte!';

	export let data;

	const back = $page.data.url;
	const reduceNew = back.split('/');
	reduceNew.splice(-1);
	const newLink = reduceNew.join('/');
</script>

<section>
	<p>{placeholder} + {data}</p>
	<form action="?/" method="post">
		<input type="text" name="title" />
		<input type="text" name="description" />
		<input type="text" name="contents" />
		<select name="tag" id="content-type">
			<option value="book">Books</option>
			<option value="journal">Journal</option>
			<option value="local">Local Collections</option>
		</select>
		<input type="hidden" name="val" bind:value={$page.params.id} />
		<button type="submit">Submit</button>
	</form>
	<a href={newLink}>Back</a>
	<pre>{data.param.id}</pre>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
