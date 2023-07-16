<script>
	import { enhance } from '$app/forms';
	import FormCollection from '$lib/components/items/FormCollection.svelte';

	let newObj = {
		subjectName: '',
		subjectSlug: '',
		status: 'active',
		description: '',
		keywords: '',
		subjectType: 'guide'
	};
</script>

<section>
	<form method="POST" use:enhance>
		<FormCollection {...newObj} />
		<button type="submit" class="btn my-1 bg-violet-5 text-white">Submit</button>
	</form>
	<div class="my-1">
		<a class="btn bg-violet-5 text-white" href="/manage/collection">Back</a>
	</div>
</section>
