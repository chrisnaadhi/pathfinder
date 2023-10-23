<script>
	import { page } from '$app/stores';
	import { backButton, trimText } from '$lib/utils/textFormatter';

	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	let placeholder = 'Discipline Page';

	const backUrl = backButton($page);

	export let data;

	const { disciplinesData } = data;
</script>

<section>
	<h2 class="dfTx">{placeholder}</h2>
	<section>
		<div class="my-3 flex justify-between">
			<h5>Daftar Disiplin Ilmu</h5>
			<a href="/manage/discipline/new" class="btn dfBg">&plus; New Discipline</a>
		</div>
		<div class="my-3">
			<a href={backUrl} class="btn bg-gray-2 text-dark">&leftarrow;Kembali</a>
		</div>

		<div class="discipline-list">
			{#each disciplinesData as discipline}
				<BaseCard>
					<div class="flex flex-col justify-between h-full">
						<h5>{discipline.disciplineName}</h5>
						<p class="text-sm">{trimText(discipline.disciplineDesc, 80)}</p>
						<p class="font-semibold italic text-xs">{discipline.disciplineFaculty}</p>
						<a
							href={$page.url.pathname + '/' + discipline.disciplineCode}
							class="btn dfBg mt-5 text-center"
						>
							Lihat
						</a>
					</div>
				</BaseCard>
			{/each}
		</div>
	</section>
</section>

<style>
	.discipline-list {
		--at-apply: flex flex-col gap-3 md:(grid grid-cols-3);
	}
</style>
