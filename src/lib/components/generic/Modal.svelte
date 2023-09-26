<script>
	let placeholder = 'Hello, svelte!';
</script>

<section class="main-bg">
	<p>{placeholder}</p>
</section>

<style>
	.main-bg {
		--at-apply: bg-dark-50/90;
	}

	p {
		--at-apply: italic;
	}
</style>
