<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { disciplineData } = data;
	const back = backButton($page);
</script>

<section>
	<h5>{disciplineData.disciplineName}</h5>
	<p>{disciplineData.disciplineDescription}</p>
	<div class="my-3">
		<a href={back} class="btn bg-gray-2 text-dark">&leftarrow;Kembali</a>
		<a href={$page.url.pathname + '/edit'} class="btn dfBg">Edit</a>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
