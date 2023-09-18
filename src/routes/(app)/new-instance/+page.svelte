<script>
	import { enhance } from '$app/forms';

	let heading = 'PathfinderKit!';
	export let data;
</script>

<main>
	<h2>{heading}</h2>
	{#if data.isAvailable}
		<div>
			<p class="mb-5">
				Look like you already have an Administrator Account. Try to login with this link instead.
			</p>
			<a href="/account" class="btn bg-violet text-white">Login</a>
		</div>
	{:else}
		<div>
			<p>
				if you're on this page then you want to seed database, click the button below to seed it
			</p>
			<p>Status: {data.status}</p>
			<p>{data.isAvailable}</p>
			<form method="post" use:enhance>
				<div class="flex flex-col text-left">
					<label for="email">Email:</label>
					<input type="text" name="email" />
				</div>
				<div class="flex flex-col text-left">
					<label for="password">Password: </label>
					<input type="password" name="password" />
				</div>
				<button type="submit" class="btn bg-violet text-white">Create PathfinderKit</button>
			</form>
		</div>
	{/if}
</main>

<style>
	main {
		--at-apply: flex flex-col items-center justify-center;
	}

	form {
		--at-apply: bg-violet-1 px-20 py-10 rounded-lg flex flex-col gap-3 max-w-sm ma;
	}

	p {
		--at-apply: italic;
	}
</style>
