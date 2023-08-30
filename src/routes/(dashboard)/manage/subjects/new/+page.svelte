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
	<h3 class="text-violet-5">Subjects</h3>
	<form method="POST" use:enhance>
		<FormCollection {...newObj} />
		<button type="submit" class="btn my-1 bg-violet-5 text-white">Submit</button>
	</form>
	<div class="my-1">
		<a class="btn bg-violet-5 text-white" href="/manage/subjects">Back</a>
	</div>
</section>
