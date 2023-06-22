<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	import FormCollection from '$lib/components/items/FormCollection.svelte';
	let pageName = 'Dynamic Routes';

	export let data;
	let { subjectData } = data;
	let objData = {
		subjectName: subjectData.subject_name,
		subjectSlug: subjectData.subject_slug,
		status: subjectData.active,
		description: subjectData.description,
		keywords: subjectData.keywords,
		subjectType: subjectData.type
	};
</script>

<section>
	<h1>{pageName}</h1>
	<form method="POST" action="?/updateData" use:enhance>
		<FormCollection {...objData} />
		<button type="submit" class="btn bg-violet-5 text-white">Update</button>
		<button type="submit" class="btn bg-red" formaction="?/deleteData">Delete</button>
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
