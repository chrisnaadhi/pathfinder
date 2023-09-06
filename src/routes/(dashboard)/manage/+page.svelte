<script>
	import { enhance } from '$app/forms';
	let name = 'Dashboard';
	export let data;
</script>

<section>
	<h1 class="text-violet-5">{name}</h1>
	<div class="mt-5">
		<a href="/" class="btn bg-violet-5 text-white hover:text-white">Back to Home</a>
	</div>
	<div>
		<p>User ID: {data.authData.user.username}</p>
		<p>Email: {data.authData.user.email}</p>
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
