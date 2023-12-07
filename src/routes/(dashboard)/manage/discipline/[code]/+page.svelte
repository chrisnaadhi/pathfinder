<script>
	import { page } from '$app/stores';
	import { backButton, trimText } from '$lib/utils/textFormatter';
	import BaseCard from '$lib/components/generic/BaseCard.svelte';
	import { base } from '$app/paths';

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
						<div class="w-full h-full flex flex-col justify-between">
							<div class="flex items-center justify-between gap-2">
								<h6>{subject.subjectName}</h6>
								<span
									class="text-sm px-2 rounded-lg text-white"
									class:bg-emerald-6={subject.type === 'guide'}
									class:bg-red-6={subject.type === 'course'}
									class:bg-blue-6={subject.type === 'topic'}
									>{subject.type}
								</span>
							</div>
							<p class="text-sm">{trimText(subject.subjectDescription, 80)}</p>
							<p class="text-xs">
								Subject Specialist : <span class="dfTx">{subject.instructor?.name}</span>
							</p>
							<div class="flex mt-2">
								<a
									href={subject.instructor?.id === userId || role === 1
										? `${base}/manage/collection/${subject.subjectSlug}`
										: `${$page.url.pathname}#`}
									class="btn w-full text-center"
									class:accessible-btn={subject.instructor?.id === userId || role === 1}
									class:inaccessible-btn={subject.instructor?.id !== userId && role !== 1}
								>
									Lihat
								</a>
							</div>
						</div>
					</BaseCard>
				{/each}
			</div>
		{:else}
			<div class="flex flex-col items-center">
				<img src={base + '/illust/undraw_Warning.png'} alt="Warning" class="w-sm" />
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
