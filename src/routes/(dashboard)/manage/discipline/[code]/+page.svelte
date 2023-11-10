<script>
	import { page } from '$app/stores';
	import { backButton, trimText } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';

	export let data;

	const { disciplineData, getSubjectOfDiscipline, role, userId } = data;

	const back = backButton($page);
</script>

<section>
	<h2>{disciplineData.disciplineName}</h2>
	<p>{disciplineData.disciplineDescription}</p>
	<div class="my-3">
		<a href={back} class="btn bg-gray-2 text-dark">&leftarrow;Kembali</a>
		{#if role === 1}
			<a href={$page.url.pathname + '/edit'} class="btn dfBg">Edit</a>
		{/if}
	</div>
	<div>
		<h4>Daftar Subjek dalam disiplin <span class="dfTx">{disciplineData.disciplineName}</span></h4>
		{#if getSubjectOfDiscipline.length > 0}
			<div class="grid grid-cols-4 gap-3">
				{#each getSubjectOfDiscipline as subject}
					<BaseCard>
						<h6>{subject.subjectName}</h6>
						<p class="text-sm">{trimText(subject.subjectDescription, 80)}</p>
						<div class="flex mt-2">
							<a
								href={subject.instructor === userId || role === 1
									? `/manage/collection/${subject.subjectSlug}`
									: `${$page.url.pathname}#`}
								class="btn w-full text-center"
								class:accessible-btn={subject.instructor === userId || role === 1}
								class:inaccessible-btn={subject.instructor !== userId && role !== 1}
							>
								Lihat
							</a>
						</div>
					</BaseCard>
				{/each}
			</div>
		{:else}
			<div class="flex flex-col items-center">
				<img src="/illust/undraw_Void.png" alt="Warning" class="w-sm" />
				<h4 class="text-red">Tidak ada Koleksi Subjek untuk {disciplineData.disciplineName}!</h4>
				<p>Silahkan tambahkan koleksi Subjek dengan klik tombol New Subject</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.accessible-btn {
		--at-apply: dfBg;
	}

	.inaccessible-btn {
		--at-apply: bg-gray-2 border border-gray text-dark cursor-not-allowed;
	}

	p {
		--at-apply: italic;
	}
</style>
