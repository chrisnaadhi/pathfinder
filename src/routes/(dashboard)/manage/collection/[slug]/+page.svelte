<script>
	import { page } from '$app/stores';
	export let data;

	const { getCollection, subjectData } = data;
</script>

<section>
	<h3 class="dfTx">Daftar Koleksi {subjectData.name}</h3>
	<p>{subjectData.description}</p>
	<p class="italic text-sm">Keywords: {subjectData.keywords}</p>
	<div>
		<div>
			{#each getCollection as collection}
				<pre>{collection.id} - {collection.name} ({collection.slug}) : Subject = {subjectData.name}</pre>
				<a href="{$page.url}/{collection.id}">Klik</a>
			{/each}
		</div>
		<a href="/manage/collection/{subjectData.slug}/new">
			<button class="default-button">Tambah</button>
		</a>
		<a href="/manage/collection">
			<button class="default-button">Back</button>
		</a>
	</div>
</section>

<style>
	button {
		--at-apply: my-3;
	}
</style>
