<script>
	import { enhance } from '$app/forms';

	let name = 'Dashboard';
	export let data;
</script>

<section>
	<h1 class="dfTx">{name}</h1>
	<div>
		<p>User ID: {data.userData?.userId}</p>
	</div>
	<form action="?/signOut" method="POST" use:enhance>
		<button type="submit" class="btn bg-red text-white">Sign Out</button>
	</form>
</section>

<style>
	button {
		--at-apply: mt-5;
	}
</style>
