<script>
	const dummy = [1, 2, 3, 4, 5];
</script>

<main class="my-5">
	<h1>Subjects Guide</h1>
	<section>
		{#each dummy as num}
			<div>Subject {num}</div>
		{/each}
	</section>
</main>

<style>
	section {
		--at-apply: flex w-full justify-center gap-4;
	}
</style>
