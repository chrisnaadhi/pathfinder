<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	let placeholder = 'Hello, svelte!';
	const { userProfile } = data;
	const back = backButton($page);
</script>

<section>
	<h3>Hello, {userProfile.username}</h3>
	<p>{placeholder}</p>
	<div>
		<a href={back} class="btn bg-gray-2">Kembali</a>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
