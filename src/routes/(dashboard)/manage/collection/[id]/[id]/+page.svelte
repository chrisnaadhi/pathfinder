<script>
	import { page } from '$app/stores';
	let placeholder = 'Hello, svelte!';
	export let data;

	const mainUrl = $page.url.toString().split('/');
	mainUrl.pop();
	const backUrl = mainUrl.join('/');
</script>

<section>
	<p>{placeholder}</p>
	<pre>{data}</pre>
	<a href={backUrl}>Kembali</a>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
