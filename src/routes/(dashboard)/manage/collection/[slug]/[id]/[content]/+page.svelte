<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';

	let placeholder = 'Konten ada disini nanti!';
	const back = backButton($page);

	export let data;
</script>

<section>
	<p>{placeholder}</p>
	{#each data.results as res}
		<pre>{res.title}</pre>
		<div>
			{@html res.contents}
		</div>
	{/each}
	<div>
		<DeleteModal>
			<p>Ingin meghapus data ?</p>
		</DeleteModal>
		<a href={back}>Kembali</a>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}

	a {
		--at-apply: btn dfBg;
	}
</style>
