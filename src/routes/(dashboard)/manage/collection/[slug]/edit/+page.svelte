<script>
	import { enhance } from '$app/forms';
	import DeleteModal from '$lib/components/generic/DeleteModal.svelte';
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
</script>

<section>
	<form method="POST" action="?/updateData" use:enhance>
		<h3 class="dfTx">{subjectData.subjectName}</h3>
		<div class="text-white">
			<a href="/manage/collection">
				<button class="dfTx bg-transparent">&leftarrow;Back</button>
			</a>
		</div>
		<FormCollection {...objData} />
		<button type="submit" class="default-button">Update</button>
		<DeleteModal>
			<p>Anda yakin ingin menghapus ini ?</p>
		</DeleteModal>
	</form>
</section>

<style>
	button {
		--at-apply: my-3;
	}
</style>
