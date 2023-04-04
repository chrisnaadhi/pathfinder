<script>
	import Welcome from '$lib/components/home/Welcome.svelte';
	import SubjectLists from '$lib/components/home/SubjectLists.svelte';

	let appName = 'PathfinderKit';
	export let data;
</script>

<main>
	<Welcome />
	<input type="search" name="general-search" id="general-search" />
	<SubjectLists />
	<p>{data.msg} - {data.statusMsg}</p>
	<p>{data.checkParams}</p>
</main>
