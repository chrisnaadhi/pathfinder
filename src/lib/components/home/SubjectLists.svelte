<script lang="ts">
	export let guideType: Array<string>;
</script>

<section class="my-5 lg:col-span-2">
	<h4>Subject Guide Lists</h4>
	<section class="content">
		{#each guideType as type}
			<div class="subject-head">{type}</div>
		{/each}
	</section>
</section>

<style>
	.content {
		--at-apply: flex justify-center gap-2 my-4;
	}

	.subject-head {
		--at-apply: dfBg px-4 py-1 rounded font-500 cursor-pointer;
	}
</style>
