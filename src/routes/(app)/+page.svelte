<script>
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import SubjectLists from '$lib/components/home/SubjectLists.svelte';
	import SubjectSpecialist from '$lib/components/home/SubjectSpecialist.svelte';
	import SubjectExplanation from '$lib/components/home/SubjectExplanation.svelte';

	export let data;
</script>

<main class="max-w-7xl ma">
	<div class="mt--27">
		<SearchBar />
	</div>
	<div class="my-5">
		<SubjectExplanation />
	</div>
	<h2 class="italic">
		<span class="text-violet-5">Lantera</span> in Action
	</h2>
	<section class="main-content">
		<div class="main-subject">
			<SubjectLists guideType={data.listGuide} />
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
		--at-apply: bg-violet-50 h-full rounded-lg;
	}

	.main-subject {
		--at-apply: grid grid-cols-none lg:grid-cols-3 my-5;
	}
</style>
