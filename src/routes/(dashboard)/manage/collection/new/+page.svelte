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
	<form method="POST" use:enhance>
		<FormCollection {...newObj} />
		<button type="submit" class="default-button">Submit</button>
	</form>
	<div class="my-1">
		<a class="default-button" href="/manage/collection">Back</a>
	</div>
</section>
