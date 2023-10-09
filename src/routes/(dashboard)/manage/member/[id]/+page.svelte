<script>
	export let data;

	let placeholder = 'Hello, svelte!';
</script>

<section>
	<h3>Hello, {data.userProfile.username}</h3>
	<p>{placeholder}</p>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
