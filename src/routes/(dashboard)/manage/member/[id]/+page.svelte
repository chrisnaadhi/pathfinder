<script>
	import { page } from '$app/stores';
	import { backButton } from '$lib/utils/textFormatter';

	export let data;

	const { userProfile } = data;
	const back = backButton($page);
</script>

<section>
	<h3>{userProfile.username}'s Profile</h3>
	<p>{userProfile.departmentName}</p>
	<div>
		<a href={back} class="btn bg-gray-2">Kembali</a>
	</div>
</section>

<style>
	p {
		--at-apply: italic;
	}
</style>
