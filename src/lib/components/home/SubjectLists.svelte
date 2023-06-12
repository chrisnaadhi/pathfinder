<script>
	const dummy = [1, 2, 3, 4];
</script>

<section class="my-5 lg:col-span-2">
	<h4>Subject Guide Lists</h4>
	<section class="content">
		{#each dummy as num}
			<div class="subject-head">Subject {num}</div>
		{/each}
	</section>
</section>

<style>
	.content {
		--at-apply: flex justify-center gap-2 my-4;
	}

	.subject-head {
		--at-apply: bg-violet px-4 py-1 rounded text-white font-500 cursor-pointer;
	}
</style>
