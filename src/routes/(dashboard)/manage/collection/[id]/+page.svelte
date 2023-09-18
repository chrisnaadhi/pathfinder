<script>
	import { page } from '$app/stores';
	export let data;

	const { getContents, subjectData } = data;
</script>

<section>
	<h3 class="text-violet-5">Daftar Koleksi {subjectData.name}</h3>
	<p class="text-italic">{subjectData.description}</p>
	<div>
		<div>
			{#each getContents as content, idx}
				<pre>{idx + 1}. {content.id} - {content.title} ({content.subject})</pre>
				<a href="{$page.url}/{content.id}">Klik</a>
			{/each}
		</div>
		<a href="/manage/collection/{subjectData.slug}/new">
			<button class="btn bg-violet text-white">Tambah</button>
		</a>
		<a href="/manage/collection">
			<button class="btn bg-violet text-white">Back</button>
		</a>
	</div>
</section>

<style>
	button {
		--at-apply: my-3;
	}
</style>
