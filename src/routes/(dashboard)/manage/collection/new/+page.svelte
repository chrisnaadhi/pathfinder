<script>
	import { enhance } from '$app/forms';
	import FormCollection from '$lib/components/items/FormCollection.svelte';

	let newObj = {
		subjectName: '',
		subjectSlug: '',
		status: 'pending',
		description: '',
		keywords: '',
		subjectType: 'guide'
	};
</script>

<section>
	<h3 class="dfTx">Subjects</h3>
	<div class="my-1">
		<a class="dfTx" href="/manage/collection">&leftarrow;Back</a>
	</div>
	<form method="POST" use:enhance>
		<FormCollection {...newObj} />
		<button type="submit" class="default-button my-5">Create</button>
	</form>
</section>
