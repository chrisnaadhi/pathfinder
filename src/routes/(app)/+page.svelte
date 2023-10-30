<script>
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import SubjectLists from '$lib/components/home/SubjectLists.svelte';
	import SubjectSpecialist from '$lib/components/home/SubjectSpecialist.svelte';
	import SubjectExplanation from '$lib/components/home/SubjectExplanation.svelte';

	export let data;

	const { getSubjectData, getSubjectSpecialist } = data;
</script>

<main class="max-w-7xl ma">
	<div class="mt--27">
		<SearchBar />
	</div>
	<div class="my-5">
		<SubjectExplanation />
	</div>
	<h2 class="italic">
		<span class="dfTx">Lantera</span> in Action
	</h2>
	<section class="main-content">
		<div class="main-subject">
			<div>
				<!-- <SubjectLists guideType={listGuide} /> -->

				<section class="flex flex-col w-full gap-2 rounded p-10 text-left">
					<h3>Daftar Subjek</h3>
					{#each getSubjectData as sub}
						<div>
							<h6>{sub.disciplineName}</h6>
							{#each sub.subject as sube}
								<div class="pl-3">
									&bigstar; <a href={'subjects/' + sube.subjectSlug}>{sube.subjectName}</a>
								</div>
							{/each}
						</div>
					{/each}
				</section>
			</div>

			<div>
				<SubjectSpecialist subjectSpecialist={getSubjectSpecialist} />
			</div>
		</div>
	</section>
</main>

<style>
	.main-content {
		--at-apply: dfBgThird h-full rounded-lg;
	}

	.main-subject {
		--at-apply: grid grid-cols-none lg:grid-cols-2 my-5;
	}
</style>
