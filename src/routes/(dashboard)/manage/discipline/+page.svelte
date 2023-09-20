<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	let placeholder = 'Discipline Page';
	const backUrl = backButton($page);
</script>

<section>
	<p>{placeholder}</p>
	<div>
		<a href={backUrl}>&leftarrow;Back</a>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
