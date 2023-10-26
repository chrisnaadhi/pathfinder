<script lang="ts">
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { subjectData, subjectGet } = data;
	const back = backButton($page);
</script>

<section class="max-w-5xl ma">
	<div>
		<h2>{subjectGet?.subjectName}</h2>
		<p class="text-sm">{subjectGet?.subjectDescription}</p>
	</div>
	<div>
		{#each subjectGet?.collections || [] as coll}
			<p>{coll}</p>
		{/each}
	</div>
	<div />

	<a href={back}>&leftarrow;Kembali</a>
</section>

<style>
	section {
		--at-apply: text-center;
	}
</style>
