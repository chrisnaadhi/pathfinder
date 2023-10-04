<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	let placeholder = 'Discipline Page';

	const backUrl = backButton($page);

	export let data;
</script>

<section>
	<h3 class="dfTx">{placeholder}</h3>
	<section>
		<div class="my-3 flex justify-between">
			<h5>Daftar Disiplin Ilmu</h5>
			<a href="/manage/discipline/new" class="btn dfBg">&plus; New Discipline</a>
		</div>

		<div class="discipline-list">
			{#each data.disciplinesData as discipline}
				<BaseCard>
					<h5>{discipline.disciplineName}</h5>
					<p>{discipline.disciplineDescription}</p>
					<a href={$page.url.pathname + '/' + discipline.code}>Klik</a>
				</BaseCard>
			{/each}
		</div>
	</section>
	<div>
		<a href={backUrl} class="dfTx">&leftarrow;Back</a>
	</div>
</section>

<style>
	.discipline-list {
		--at-apply: flex flex-col gap-3 md:(grid grid-cols-3);
	}
</style>
