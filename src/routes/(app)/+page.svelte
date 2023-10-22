<script>
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import SubjectLists from '$lib/components/home/SubjectLists.svelte';
	import SubjectSpecialist from '$lib/components/home/SubjectSpecialist.svelte';
	import SubjectExplanation from '$lib/components/home/SubjectExplanation.svelte';

	export let data;

	const { listGuide, getSubjects } = data;
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
				<SubjectLists guideType={listGuide} />
				<section class="grid grid-cols-3 gap-2 rounded">
					{#each getSubjects as subject}
						<div class="dfBgSecond">
							<h6>{subject.subjectName}</h6>
						</div>
					{/each}
				</section>
			</div>

			<div>
				<SubjectSpecialist />
			</div>
		</div>
		<p>{data.msg} - {data.statusCode}</p>
		<p>{data.checkParams}</p>
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
