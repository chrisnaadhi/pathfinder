<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';
	import CollectionCard from '$lib/components/generic/CollectionCard.svelte';

	export let data;

	const { getCollection, subjectData, specialist } = data;
	const back = backButton($page);
</script>

<section>
	<h3 class="dfTx">{subjectData.name}</h3>
	<div class="flex gap-5 p-5">
		<div class="flex flex-col items-center justify-center text-center gap-3 min-w-60">
			<p class="font-semibold italic">Subject Specialist</p>
			<img src={specialist.photo} alt="" class="w-30 h-30 rounded-lg object-cover" />
			<h6>{specialist.name}</h6>
		</div>
		<div>
			<p>{subjectData.description}</p>
			<p class="italic text-sm">Keywords: {subjectData.keywords}</p>
		</div>
	</div>

	<div class="flex items-center gap-3">
		<a href="/manage/collection/{subjectData.slug}/new" class="w-full">
			<button class="default-button">&plus;Tambah</button>
		</a>
		<a href={back} class="w-full">
			<button class="default-button">Kembali</button>
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
