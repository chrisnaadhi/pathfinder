<script>
	let placeholder = 'Hello, svelte!';

	export let data;
</script>

<section>
	<p>{placeholder}</p>
	<pre>{data.user?.username}</pre>
	<div>
		<form action="?/logout" method="post">
			<button type="submit" class="btn bg-red text-white text-xs">Logout</button>
		</form>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
