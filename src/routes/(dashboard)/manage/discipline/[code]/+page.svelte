<script>
	import { page } from '$app/stores';
	import { backButton, trimText } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	const { disciplineData, getSubjectOfDiscipline } = data;
	const back = backButton($page);
</script>

<section>
	<h2>{disciplineData.disciplineName}</h2>
	<p>{disciplineData.disciplineDescription}</p>
	<div class="my-3">
		<a href={back} class="btn bg-gray-2 text-dark">&leftarrow;Kembali</a>
		<a href={$page.url.pathname + '/edit'} class="btn dfBg">Edit</a>
	</div>
	<div>
		<h4>Daftar Subjek dalam disiplin <span class="dfTx">{disciplineData.disciplineName}</span></h4>
		<div class="grid grid-cols-4 gap-3">
			{#each getSubjectOfDiscipline as subject}
				<BaseCard>
					<h6>{subject.subjectName}</h6>
					<p>{trimText(subject.subjectDescription, 80)}</p>
					<div class="flex mt-2">
						<a href="/manage/collection/{subject.subjectSlug}" class="btn dfBg w-full text-center">
							Lihat
						</a>
					</div>
				</BaseCard>
			{/each}
		</div>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
