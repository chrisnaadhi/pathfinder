<script>
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import SubjectLists from '$lib/components/home/SubjectLists.svelte';
	import SubjectSpecialist from '$lib/components/home/SubjectSpecialist.svelte';
	import SubjectExplanation from '$lib/components/home/SubjectExplanation.svelte';

	export let data;

	const { lists } = data;
</script>

<main class="max-w-7xl ma">
	<div class="mt--27">
		<SearchBar />
	</div>
	<div class="my-5">
		<SubjectExplanation />
	</div>
	<h2>Lantera in Action</h2>
	<section class="main-content">
		<div class="main-subject">
			<SubjectLists guideType={data.listGuide} />
			<div>
				<SubjectSpecialist />
			</div>
		</div>
		{#each Object.entries(lists) as [key, val]}
			<div>
				<h5>{key}</h5>
				{#each val as item}
					<p>{item.contentTitle}</p>
				{/each}
			</div>
		{/each}
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
