<script>
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import SubjectLists from '$lib/components/home/SubjectLists.svelte';

	export let data;
</script>

<main class="max-w-7xl ma">
	<SearchBar />
	<section class="main-content">
		<SubjectLists />
		<p>{data.msg} - {data.statusCode}</p>
		<p>{data.checkParams}</p>
	</section>
</main>

<style>
	.main-content {
		--at-apply: bg-gray-2 h-screen rounded-lg;
	}
</style>
