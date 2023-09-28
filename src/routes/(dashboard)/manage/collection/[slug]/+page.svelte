<script>
	import { page } from '$app/stores';
	import CollectionCard from '$lib/components/generic/CollectionCard.svelte';

	export let data;

	const { getCollection, subjectData } = data;
</script>

<section>
	<h3 class="dfTx">{subjectData.name}</h3>
	<p>{subjectData.description}</p>
	<p class="italic text-sm">Keywords: {subjectData.keywords}</p>
	<div>
		<a href="/manage/collection/{subjectData.slug}/new">
			<button class="default-button">Tambah</button>
		</a>
		<a href="/manage/collection">
			<button class="default-button">Back</button>
		</a>
	</div>
	<h5>Daftar Koleksi {subjectData.name}</h5>
	<div>
		<div class="flex flex-col lg:(grid grid-cols-3) gap-2">
			{#each getCollection as collection}
				<CollectionCard
					title={collection.name}
					description={collection.deskripsi}
					slug={$page.url + '/' + collection.id}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	button {
		--at-apply: my-3;
	}
</style>
