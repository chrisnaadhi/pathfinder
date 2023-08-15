<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	import FormCollection from '$lib/components/items/FormCollection.svelte';

	export let data;
	let { subjectData } = data;
	let objData = {
		subjectName: subjectData.subjectName,
		subjectSlug: subjectData.subjectSlug,
		status: subjectData.subjectStatus,
		description: subjectData.subjectDescription,
		keywords: subjectData.keywords,
		subjectType: subjectData.type
	};

	let confirmState = 'keep';
	const confirmDelete = () => {
		const del = window.confirm('Ingin menghapus data ?');
		if (del) {
			return (confirmState = 'delete');
		} else {
			return (confirmState = 'keep');
		}
	};
</script>

<section>
	<h1>{subjectData.subjectName}</h1>
	<form method="POST" action="?/updateData" use:enhance>
		<h3 class="text-violet-5">Subjects</h3>
		<FormCollection {...objData} />
		<input type="hidden" name="confirmation" bind:value={confirmState} />
		<button type="submit" class="btn bg-violet-5 text-white">Update</button>
		<button type="submit" class="btn bg-red" on:click={confirmDelete} formaction="?/deleteData">
			Delete
		</button>
	</form>
	<div class="text-white">
		<a href="/manage/collection">
			<button class="btn bg-violet">Back</button>
		</a>
	</div>
</section>

<style>
	button {
		--at-apply: my-3;
	}
</style>
